/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import Product from 'src/services/product';
import MediaLoading from '../products/components/MediaLoading';

import './style.css';
import { fCurrency } from 'src/utils/formatNumber';
import DescriptionTab from './tabItems/DescriptionTab/DescriptionTab';
import ReviewTab from './tabItems/ReviewTab/ReviewTab';

const TYPE_CLICKS = {
  SIZE: 'size',
  COLOR: 'color',
  MATERIAL: 'material'
};
function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tabString, setTabString] = useState('DescriptionTab');
  const [productDetail, setProductDetail] = useState(null);
  const [detailVariant, setDetailVariant] = useState(null);
  const [canAddToCart, setCanAddToCart] = useState(false);

  const [variantSelected, setVariantSelected] = useState({
    [TYPE_CLICKS.SIZE]: null,
    [TYPE_CLICKS.COLOR]: null,
    [TYPE_CLICKS.MATERIAL]: null
  });

  const fetchDetailProduct = useCallback(async () => {
    try {
      setLoading(true);
      const productRes = await Product.getDetailProduct({ id });
      if (!productRes.data) {
        navigate('/shop');
        return;
      }
      const productDetailItem = productRes.data;
      setProductDetail(productDetailItem);
    } catch (error) {
      navigate('/shop');
    } finally {
      setLoading(false);
    }
  },[id, navigate]);
  useEffect(() => {
    if (id) {
      fetchDetailProduct();
    }
  }, []);

  // const tabItemContent = (tab) => {
  //   switch (tab) {
  //     case 'Description':
  //       return <DescriptionTab />;

  //     case 'ReviewTab':
  //       return <ReviewTab />;
  //   }
  // };

  const tabItem = useMemo(() => {
    // eslint-disable-next-line default-case
    switch (tabString) {
      case 'DescriptionTab':
        return <DescriptionTab />;

      case 'ReviewTab':
        return <ReviewTab fetchDetailProduct={fetchDetailProduct} comment={productDetail?.comment} productId={productDetail?._id}/>;
    }
  }, [fetchDetailProduct, tabString]);

  if (loading) {
    return <MediaLoading />;
  }

  const { name, image, description } = productDetail || {};
  const isHaveVariant = productDetail?.variants?.length > 0;
  const listOption = isHaveVariant ? productDetail.option : [];
  const addToCartPure = !isHaveVariant && detailVariant?.quantity > 0;
  const priceItem = detailVariant ? detailVariant.price : productDetail?.price;
  const salePrice = detailVariant ? detailVariant.salePrice : productDetail?.salePrice;

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
      productDetail.variants.forEach((itemVariant) => {
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

    setVariantSelected(newVariantSelected);
    setCanAddToCart(engoughAddCart && existItem);
  };

  const changeTab = (e, tabTitle) => {
    e.preventDefault();
    setTabString(tabTitle);
  };
  return (
    <div >
      <div className="bannerProduct">
        <h1>Single Product</h1>
        <a href="#">HOME</a>
        <span>/</span>
        <a href="#">SINGLE PRODUCT</a>
      </div>
      {/* Start Single Product */}
      <div className="singleProduct">
        <div className="singleProduct__wrap container">
          <div className="firstTitle">WOOCOMMERCE</div>
          <h4 className="title">SINGLE PRODCUT</h4>
          <p>Single product page by product ID</p>
          <div className="signleProduct__content">
            <div className="info dflex">
              <div className="info__content">
                <a href="#">Home</a>
                <span>/</span>
                <a href="#">Shop</a>
                <span>/</span>
                <a href="#">
                  <strong>{name}</strong>
                </a>
              </div>
              <div className="control dflex">
                <i className="fas fa-angle-left"></i>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="19px"
                  height="19px"
                  viewBox="0 0 19 19"
                  enable-background="new 0 0 19 19"
                  xmlSpace="preserve"
                >
                  <path d="M7,2v5H2V2H7 M9,0H0v9h9V0L9,0z"></path>
                  <path d="M17,2v5h-5V2H17 M19,0h-9v9h9V0L19,0z"></path>
                  <path d="M7,12v5H2v-5H7 M9,10H0v9h9V10L9,10z"></path>
                  <path d="M17,12v5h-5v-5H17 M19,10h-9v9h9V10L19,10z"></path>
                </svg>
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
            <div className="product dflex">
              <div className="col-lg-6 col-12">
                <img src={image} alt="" />
              </div>
              <div style={{ textAlign: 'left' }} className="content col-lg-6 col-12">
                <h1>{name}</h1>
                {listOption?.map((itemOption) => {
                  if (itemOption.key === 'color')
                    return (
                      <div className="color">
                        <h3>Color :</h3>
                        {itemOption.value?.map((itemValue) => (
                          <span
                            onClick={() => swatchItem({ id: itemValue.id, type: TYPE_CLICKS.COLOR })}
                            className={
                              variantSelected[TYPE_CLICKS.COLOR] === itemValue.id
                                ? 'active color-option'
                                : 'color-option'
                            }
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
                <div className="stars dflex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <p style={{ margin: 0 }}>(1 customer review)</p>
                </div>
                <div className="price">
                  <del style={{ color: 'black' }}>{fCurrency(priceItem)}VND</del>
                  <div>{fCurrency(salePrice)}VND</div>
                </div>
                <p>{description}</p>
                <div
                  style={{ cursor: 'pointer', background: `${canAddToCart || addToCartPure ? '#83b735' : '#777'}` }}
                  className={`btn ${canAddToCart || addToCartPure ? 'active' : 'disabled'}`}
                  href="cart.html"
                >
                  Add To Cart
                </div>
                <div className="tools dflex">
                  <a className="link" href="#">
                    <i className="fas fa-random"></i>Compare
                  </a>
                  <a className="link" href="#">
                    <i className="far fa-heart"></i>Add to Wishlist
                  </a>
                  <a className="link" href="#">
                    <i className="fas fa-ruler"></i>Size Guide
                  </a>
                </div>
                <hr />
                <a className="tag" href="#">
                  <strong>Category:</strong>Lighting
                </a>
                <a className="tag" href="#">
                  <strong>Tags: </strong>lamp, wood
                </a>
                <div className="share dflex">
                  <strong>Share:</strong>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-pinterest"></i>
                  <i className="fab fa-linkedin-in"></i>
                  <i className="fas fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="singleDes">
            <div className="tabs">
              <a
                className={`link ${tabString === 'DescriptionTab' && 'active'}`}
                onClick={(e) => {
                  changeTab(e, 'DescriptionTab');
                }}
                href=""
              >
                DESCRIPTION
              </a>
              <a className="link" href="">
                ADDITIONAL INFORMATION
              </a>
              <a
                className={`link ${tabString === 'ReviewTab' && 'active'}`}
                href=""
                onClick={(e) => {
                  changeTab(e, 'ReviewTab');
                }}
              >
                REVIEWS (1)
              </a>
              <a className="link" href="">
                ABOUT BRAND
              </a>
              <a className="link" href="">
                SHIPping & DELIVERY
              </a>
            </div>
            <div className="tab__items">{tabItem}</div>
          </div>
        </div>
      </div>
      {/*  End Single Product  */}
    </div>
  );
}

export default DetailProduct;
