import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Product from 'src/services/product';
import MediaLoading from '../products/components/MediaLoading';

import './style.css';
import { fCurrency } from 'src/utils/formatNumber';

const TYPE_CLICKS = {
  SIZE: 'size',
  COLOR: 'color',
  MATERIAL: 'material'
};
function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [detailVariant, setDetailVariant] = useState(null);
  const [canAddToCart, setCanAddToCart] = useState(false);

  const [variantSelected, setVariantSelected] = useState({
    [TYPE_CLICKS.SIZE]: null,
    [TYPE_CLICKS.COLOR]: null,
    [TYPE_CLICKS.MATERIAL]: null
  });
  useEffect(() => {
    const fetchDetailProduct = async () => {
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
    };
    if (id) {
      fetchDetailProduct();
    }
  }, []);
  console.log(productDetail, 'productDetail');

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

  return (
    <div>
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
              <a className="link active" href="#1">
                DESCRIPTION
              </a>
              <a className="link" href="#1">
                ADDITIONAL INFORMATION
              </a>
              <a className="link" href="#1">
                REVIEWS (1)
              </a>
              <a className="link" href="#1">
                ABOUT BRAND
              </a>
              <a className="link" href="#1">
                SHIPping & DELIVERY
              </a>
            </div>
            <div className="tab__items">
              <div className="item dflex active">
                <div className="content col-4">
                  <h5 className="footerTitle">Maecenas Iaculis</h5>
                  <p>
                    <img src="./images/shop/brand/brand-Rosenthal.png" alt="" />
                    Nunc per mollis pot enti amet imperdiet blandit dis eu sociosqu accumsan dap ibus ultricies
                    tristique montes a deros adipiscing a justo. Aliquet mus a aptent ullamcorper metus accumsan.
                    Habitasse a purus nec ipsum a urna ac ullamcorper varius metus blandit posuere.
                  </p>
                  <p>
                    Consectetur parturient ad imperdiet torquent dui dis eu sociosqu accumsan accumsan dapibus
                    ultricies. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibur.
                  </p>
                </div>
                <div className="content col-4">
                  <h5 className="footerTitle">FEUGIAT PARTURIENT</h5>
                  <p>
                    Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi
                    curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante a mollis
                    habitant duis urna cum iaculis ullamcorper luctus.
                  </p>
                  <ul>
                    <li>65% Polyester, 23% Elastane</li>
                    <li>Abitur parturient praesent ipsu</li>
                    <li>Minceptos pri 187cm/3’1.3″ tall</li>
                    <li>Diam parturient dictumst nibh mu</li>
                  </ul>
                </div>
                <div className="content col-4">
                  <h5 className="footerTitle">FEUGIAT PARTURIENT</h5>
                  <p>
                    Model’s height: 4’2.2”/184 cm
                    <br />
                    Model is wearing: Size Large
                  </p>
                  <h5 className="footerTitle">ALIQUET</h5>
                  <p>
                    Quam suspendisse adipiscing quis pretium nostra cubilia tristique nam non ac placerat nascetur a
                    vel.
                  </p>
                  <h5 className="footerTitle">CURABITUR VELIT</h5>
                  <p>Main: 76% Polyester, 24% Elastane.</p>
                </div>
              </div>
              <div className="item dflex" style={{ textAlign: 'center' }}>
                <div className="col-6" style={{ padding: '3rem 0' }}>
                  <a className="link active" href="#">
                    Brand
                  </a>
                </div>
                <div className="col-6" style={{ padding: '3rem 0' }}>
                  <a className="link" href="#">
                    Klober
                  </a>
                </div>
              </div>
              <div className="item dflex review">
                <div className="content col-6">
                  <h5 className="footerTitle">1 review for Light wood consectetur</h5>
                  <div className="client dflex">
                    <div className="client__avater col-2">
                      <img src="./images/singleProduct/avatar.jpeg" alt="" />
                    </div>
                    <div className="client__content col-10">
                      <span>
                        <strong>admin</strong>- March 9, 2017
                      </span>
                      <span className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </span>
                      <p>
                        Hac parturient a parturient a ante ut a vel netus sem nisl a a cubilia scelerisque arcu
                        vestibulum nascetur adipiscing pharetra amet erat convallis suspendisse cum. Adipiscing a nunc
                        erat vulputate iaculis faucibus id sapien fermentum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content col-6">
                  <h5 className="footerTitle">Add A Review</h5>
                  <p>Your email address will not be published. Required fields are marked </p>
                  <p>
                    Your rating:
                    <span className="stars">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </p>
                  <form action="#">
                    <p>Your Review</p>
                    <textarea></textarea>
                    <div className="dflex">
                      <div className="input">
                        <label for="name">Name</label>
                        <input type="text" id="name" />
                      </div>
                      <div className="input">
                        <label for="Email">Email</label>
                        <input type="text" id="email" />
                      </div>
                    </div>
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                    <button type="submit">SUBMIT</button>
                  </form>
                </div>
              </div>
              <div className="item dflex brand">
                <div className="content col-4">
                  <img src="./images/singleProduct/klobe.png" alt="" style={{ marginBottom: '20px', width: '170px' }} />
                  <p>
                    Parturient ut id tellus vulputatre ac ultrlices a part ouriesnt sapien dignissim{' '}
                    <a href="#">
                      <strong>partu rient</strong>
                    </a>{' '}
                    a a inter drum vehicula. Ornare metus laoreet tincidunt{' '}
                    <a href="#">
                      <strong>eros rolem</strong>
                    </a>
                    tristique pretium malada.
                  </p>
                  <p>
                    <em>
                      Cras rhoncus vivamus luctus platea arcu laoreet selm. Curae est condenectus sed hac a parturient
                      vestibulum.
                    </em>
                  </p>
                  <a className="link" href="#">
                    MORE PRODUCTS
                  </a>
                </div>
                <div className="content col-8 dflex">
                  <img src="./images/shop/product/tie-1.jpg" alt="" />
                  <img src="./images/shop/product/wood-1.jpg" alt="" />
                  <img src="./images/shop/product/watch-black.jpg" alt="" />
                </div>
              </div>
              <div className="item dflex shipping">
                <div className="content col-6">
                  <img src="./images/singleProduct/wood-ship-1.jpg" alt="" style={{ width: '47%', margin: '0 5px' }} />
                  <img src="./images/singleProduct/wood-ship-3.jpg" alt="" style={{ width: '47%', margin: '0 5px' }} />
                </div>
                <div className="content col-6">
                  <h5 className="footerTitle">MAECENAS IACULIS</h5>
                  <p>
                    Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum
                    parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque
                    adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.
                  </p>
                  <h5 className="footerTitle">ADIPISCING CONVALLIS BULUM</h5>
                  <ul>
                    <li>Vestibulum penatibus nunc dui adipiscing convallis bulum parturient suspendisse.</li>
                    <li>Abitur parturient praesent lectus quam a natoque adipiscing a vestibulum hendre.</li>
                    <li>Diam parturient dictumst parturient scelerisque nibh lectus.</li>
                  </ul>
                  <p>
                    Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt
                    purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam
                    inceptos hac parturient scelerisque vestibulum amet elit ut volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  End Single Product  */}
    </div>
  );
}

export default DetailProduct;
