import React from 'react';
import prSha from '../../pages/images/home/product/chair-new-shadow-opt-4.png';
import otp2 from '../../pages/images/home/product/lamp-new-opt-2.png';

const ProductSide = () => {
  return (
    <div className="product">
      <div className="product__control">
        <span className="active" data-slide="0"></span>
        <span data-slide="1"></span>
      </div>
      <ul className="product__slider dflex" id="wrap">
        <li className="prodcut__item dflex col-12" data-text="BestSellers">
          <div className="product__image col-md-6 col-12">
            <img src={prSha} alt="" />
          </div>
          <div className="product__content col-md-6 col-12">
            <div className="title">Product Landing Page</div>
            <h4 className="title">Vitra Chair - Classic Design.</h4>
            <ul>
              <li>
                <h4>Designer:</h4>
                <p>Charles, Ray Eames</p>
              </li>
              <li>
                <h4>Materials:</h4>
                <p>Wood, Leather, Metal</p>
              </li>
              <li>
                <h4>Client:</h4>
                <p>Woodmart, Basel</p>
              </li>
            </ul>
            <span className="price">$1999.00</span>
            <a className="btn" href="#">
              Add to Cart
            </a>
          </div>
        </li>
        <li className="prodcut__item dflex col-12" data-text="BestSellers">
          <div className="product__image col-md-6 col-12">
            <img src={otp2} alt="" />
          </div>
          <div className="product__content col-md-6 col-12">
            <div className="title">Product Landing Page</div>
            <h4 className="title">Woodspot - Lamp by Seletti.</h4>
            <ul>
              <li>
                <h4>Designer:</h4>
                <p>Charles, Ray Eames</p>
              </li>
              <li>
                <h4>Materials:</h4>
                <p>Wood, Leather, Metal</p>
              </li>
              <li>
                <h4>Client:</h4>
                <p>Woodmart, Basel</p>
              </li>
            </ul>
            <span className="price">$240.00</span>
            <a className="btn" href="#">
              Add to Cart
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductSide;
