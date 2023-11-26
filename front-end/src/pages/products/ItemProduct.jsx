import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ProductService from 'src/services/product';
import { fCurrency } from 'src/utils/formatNumber';
import useCart from '../cart/useCart';
import { useSnackbar } from 'notistack5';
import CartService from 'src/services/cart';

const TYPE_CLICKS = {
  SIZE: 'size',
  COLOR: 'color',
  MATERIAL: 'material'
};

function ItemProduct({ item, carts, user }) {
  const { enqueueSnackbar } = useSnackbar();
  const { fetchCart } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(item);
  const [listVariantHaveId, setListVariantHaveId] = useState([]);
  const isHaveVariant = product?.variants?.length > 0;
  const listOption = isHaveVariant ? product.option : [];
  const [canAddToCart, setCanAddToCart] = useState(false);
  const [detailVariant, setDetailVariant] = useState(null);
  const priceItem = detailVariant ? detailVariant.price : product?.price;
  const salePrice = detailVariant ? detailVariant.salePrice : product?.salePrice;
  const addToCartPure = !isHaveVariant && product?.quantity > 0;
  const [variantProdictSelected, setVariantProductSelected] = useState();
  const [variantSelected, setVariantSelected] = useState({
    [TYPE_CLICKS.SIZE]: null,
    [TYPE_CLICKS.COLOR]: null,
    [TYPE_CLICKS.MATERIAL]: null
  });
  const goToDetail = () => {
    navigate(`/detailProduct/${product.id}`);
  };

  const swatchItem = ({ id, type }) => {
    let newVariantSelected = { ...variantSelected, [type]: id };

    let engoughAddCart = true;
    listOption.forEach((itemOption) => {
      if (TYPE_CLICKS.SIZE === itemOption.key && !newVariantSelected[TYPE_CLICKS.SIZE]) {
        engoughAddCart = false;
      } else if (TYPE_CLICKS.COLOR === itemOption.key && !newVariantSelected[TYPE_CLICKS.COLOR]) {
        engoughAddCart = false;
      } else if (TYPE_CLICKS.MATERIAL === itemOption.key && !newVariantSelected[TYPE_CLICKS.MATERIAL]) {
        engoughAddCart = false;
      }
    });
    let existItem = false;
    if (engoughAddCart) {
      product.variants.forEach((itemVariant) => {
        let matchCount = 0;
        itemVariant.values.forEach((itemValueVariant) => {
          newVariantSelected[TYPE_CLICKS.SIZE] === itemValueVariant && matchCount++;
          newVariantSelected[TYPE_CLICKS.COLOR] === itemValueVariant && matchCount++;
          newVariantSelected[TYPE_CLICKS.MATERIAL] === itemValueVariant && matchCount++;
        });
        if (matchCount === itemVariant.values.length) {
          existItem = true;
          setDetailVariant(itemVariant);
        }
      });
    }
    if (!existItem) {
      setDetailVariant(null);
    }
    console.log(existItem, 'existItem');
    setVariantSelected(newVariantSelected);

    setCanAddToCart(engoughAddCart && existItem);
  };

  const onAddProductToCart = async (product) => {
    if (!carts) {
      let res = await CartService.createCart();
      localStorage.setItem('cartId', res.cartId);
      if (user) {
        let params = {
          cartId: res.cartId
        };
        await CartService.addUserToCart(params);
      }
      let params = {
        cartId: res.cartId,
        variantId: product.id,
        quantity: 1
      };
      await ProductService.addProductToCart(params);
      fetchCart(res.cartId);
      enqueueSnackbar('Add success', { variant: 'success' });
      return;
    }
    if(carts.userId === '' && user){
      let params = {
        cartId: carts.idCart
      };
      await CartService.addUserToCart(params);
    }
    let params = {
      cartId: carts.idCart,
      variantId: product.id,
      quantity: 1
    };
    await ProductService.addProductToCart(params);
    fetchCart(carts.idCart);
    enqueueSnackbar('Add success', { variant: 'success' });
  };

  return (
    <li className="product__item">
      <div onClick={goToDetail} className="product__image twentyFivePercent">
        <img src={product.image} alt="" />
        <div className="image__tools">
          <i className="fas fa-search"></i>
          <i className="fas fa-random"></i>
          <i className="far fa-heart"></i>
        </div>
      </div>
      <div className="product__content">
        <a onClick={goToDetail} className="link-title" href="#">
          {product?.name}
        </a>
        <a className="sub-link" href="#">
          Furniture
        </a>
        <p className="price">
          <del>{fCurrency(priceItem)}VND</del>
          {fCurrency(salePrice)}VND
        </p>
        {listOption?.map((itemOption) => {
          if (itemOption.key === 'color')
            return (
              <div className="color">
                <h3>Color :</h3>
                {itemOption.value?.map((itemValue) => (
                  <span
                    onClick={() => swatchItem({ id: itemValue.id, type: TYPE_CLICKS.COLOR })}
                    className={variantSelected[TYPE_CLICKS.COLOR] === itemValue.id ? 'active' : ''}
                    key={itemValue.id}
                    style={{ background: itemValue.value }}
                  />
                ))}
              </div>
            );
          if (itemOption.key === 'size') {
            return (
              <div className="size__option">
                <h3>Size :</h3>
                {itemOption.value?.map((itemValue) => (
                  <span
                    onClick={() => swatchItem({ id: itemValue.id, type: TYPE_CLICKS.SIZE })}
                    className={variantSelected[TYPE_CLICKS.SIZE] === itemValue.id ? 'active' : ''}
                    key={itemValue.id}
                  >
                    {itemValue.value}
                  </span>
                ))}
              </div>
            );
          }
          return (
            <div className="size__option">
              <h3>Material :</h3>
              {itemOption.value?.map((itemValue) => (
                <span
                  onClick={() => swatchItem({ id: itemValue.id, type: TYPE_CLICKS.MATERIAL })}
                  className={variantSelected[TYPE_CLICKS.MATERIAL] === itemValue.id ? 'active' : ''}
                  key={itemValue.id}
                >
                  {itemValue.value}
                </span>
              ))}
            </div>
          );
        })}

        <p>{product?.description}</p>
        <div
          style={{ cursor: 'pointer', background: `${canAddToCart || addToCartPure ? '#83b735' : '#777'}` }}
          className={`btn ${canAddToCart || addToCartPure ? 'active' : 'disabled'}`}
          href="cart.html"
          onClick={() => onAddProductToCart(detailVariant)}
        >
          Add To Cart
        </div>
      </div>
    </li>
  );
}

export default ItemProduct;
