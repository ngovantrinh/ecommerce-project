import React from 'react';
import swatch from '../../pages/images/bannerSlide/swatch-main-demo-1.jpg';
import swatch1 from '../../pages/images/bannerSlide/swatch-main-demo-1-2.jpg';
import swatch13 from '../../pages/images/bannerSlide/swatch-main-demo-1-3.jpg';
import swatch14 from '../../pages/images/bannerSlide/swatch-main-demo-1-4.jpg';
import swDemo2 from '../../pages/images/bannerSlide/slider-main-demo-2.jpg';
import swDemo21 from '../../pages/images/bannerSlide/slider-main-demo-2-1.jpg';
import sldemo2 from '../../pages/images/bannerSlide/slider-main-demo-2.jpg';
import sldemo3 from '../../pages/images/bannerSlide/slider-main-demo-3.jpg';
import sldemo4 from '../../pages/images/bannerSlide/slider-main-demo-2-2.jpg';
import '../../pages/js/main';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__control">
        <div className="circle dflex">
          <span className="active" data-slide="0"></span>
          <span data-slide="1"></span>
          <span data-slide="2"></span>
        </div>
        <div className="button buttonLeft dflex">
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="button buttonRight dflex">
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
      <ul className="slider dflex">
        <li className="slider__item col-12 dflex firstSlide active">
          <div className="content col-lg-4 col-6">
            <h2>Simple - Rock Chairs</h2>
            <p>
              Semper vulputate aliquam curae condimentum
              <br />
              quisque gravida fusce convallis arcu cum at.
            </p>
            <div className="smallImage dflex">
              <img className="changeImage" src={swatch} alt="" data-image={swatch} />
              <img className="changeImage" src={swatch1} alt="" data-image={swatch1} />
              <img className="changeImage" src={swatch13} alt="" data-image={swatch13} />
              <img className="changeImage" src={swatch14} alt="" data-image={swatch14} />
            </div>
            <div className="price">$199.00</div>
          </div>
          <div className="image col-lg-6 col-6">
            <img className="switchImage" src={swatch} alt="" />
          </div>
        </li>
        <li className="slider__item col-12 dflex secondSlide">
          <div className="content col-lg-4 col-6">
            <h2>Eanes - Side Chairs.</h2>
            <div className="colors dflex">
              <p>Color:</p>
              <div className="blue color changeImage" data-image={swDemo2}></div>
              <div className="red color changeImage" data-image={swDemo21}></div>
              <div className="orange color changeImage" data-image={sldemo4}></div>
            </div>
            <p>
              Semper vulputate aliquam curae condimentum
              <br />
              quisque gravida fusce convallis arcu cum at.
            </p>
            <div className="price">$99.00</div>
          </div>
          <div className="image col-lg-6 col-6">
            <img className="switchImage" src={sldemo2} alt="" />
          </div>
        </li>
        <li className="slider__item col-12 dflex wooden">
          <div className="content col-lg-4 col-6">
            <h3>Cappellini</h3>
            <h2>Wooden Lounge Chairs</h2>
            <p>
              Semper vulputate aliquam curae condimentum
              <br />
              quisque gravida fusce convallis arcu cum at.
            </p>
            <div className="price">$999.00</div>
          </div>
          <div className="image col-lg-6 col-6">
            <img className="switchImage" src={sldemo3} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
