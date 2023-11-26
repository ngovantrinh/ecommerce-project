import React from 'react';
import flower from '../../images/shop/banner/flower.svg';
import clock from '../../images/shop/banner/clock.svg';
import knives from '../../images/shop/banner/knives.svg';
import chair from '../../images/shop/banner/chair.svg';
import lightBulb from '../../images/shop/banner/light-bulb.svg';
import rockingHorse from '../../images/shop/banner/rocking-horse.svg';

function Banner() {
  return (
    <div>
      <div class="bannerHeader">
        <h1 class="title">Shop</h1>
        <a class="des link" href="#">
          CATEGORIES<i class="fas fa-angle-down"></i>
        </a>
        <div class="banner__list dflex">
          <a class="item dflex" href="#">
            <img src={flower} alt="" />
            <div class="content">
              <span class="name">Accessories</span>
              <span class="des">12 Product</span>
            </div>
          </a>
          <a class="item dflex" href="#">
            <img src={clock} alt="" />
            <div class="content">
              <span class="name">Clocks</span>
              <span class="des">12 Product</span>
            </div>
          </a>
          <a class="item dflex" href="#">
            <img src={knives} alt="" />
            <div class="content">
              <span class="name">Cooking</span>
              <span class="des">12 Product</span>
            </div>
          </a>
          <a class="item dflex" href="#">
            <img src={chair} alt="" />
            <div class="content">
              <span class="name">Furniture</span>
              <span class="des">22 Product</span>
            </div>
          </a>
          <a class="item dflex" href="#">
            <img src={lightBulb} alt="" />
            <div class="content">
              <span class="name">Lighting</span>
              <span class="des">16 Product</span>
            </div>
          </a>
          <a class="item dflex" href="#">
            <img src={rockingHorse} alt="" />
            <div class="content">
              <span class="name">Toys</span>
              <span class="des">12 Product</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
