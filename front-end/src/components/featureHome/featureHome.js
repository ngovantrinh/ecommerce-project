import React from 'react';
import cat from '../../pages/images/home/cat-23-860x860.jpg';
import catClock from '../../pages/images/home/cat-klock-430x430.jpg';
import catClock3 from '../../pages/images/home/cat-clock-3-430x430.jpg';
import liCat from '../../pages/images/home/light-cat-5-430x430.jpg';
import toyCat from '../../pages/images/home/Toys-cat-1-430x430.jpg';

const FeatureHome = () => {
  return (
    <div className="feature">
      <div className="firstTitle">Woodmart Collections</div>
      <h4 className="title">Featured Categories</h4>
      <div className="lastTitle">WoodMart is a powerful eCommmerce theme for WordPress</div>
      <div className="feature__wrap container">
        <div className="feature__item big">
          <img src={cat} alt="" />
          <div className="feature__content">
            <h3>Furniture</h3>
            <span>22 products</span>
          </div>
        </div>
        <div className="feature__item">
          <img src={catClock} alt="" />
          <div className="feature__content">
            <h3>Clocks</h3>
            <span>12 products</span>
          </div>
        </div>
        <div className="feature__item">
          <img src={catClock3} alt="" />
          <div className="feature__content">
            <h3>Accessories</h3>
            <span>12 products</span>
          </div>
        </div>
        <div className="feature__item">
          <img src={liCat} alt="" />
          <div className="feature__content">
            <h3>Lighting</h3>
            <span>16 products</span>
          </div>
        </div>
        <div className="feature__item">
          <img src={toyCat} alt="" />
          <div className="feature__content">
            <h3>Toys</h3>
            <span>22 products</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHome;
