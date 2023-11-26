import React from 'react';

import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import './style.css';
import { Height } from '@material-ui/icons';

const EmptyCart = () => {
  return (
    <div class="container">
      <div class="row content-layout-wrapper align-items-start">
        <div class="site-content col-lg-12 col-12 col-md-12 wd-builder-off" role="main">
          <article id="post-7" class="post-7 page type-page status-publish hentry">
            <div class="entry-content">
              <div class="woocommerce">
                <div class="woocommerce">
                  <link
                    rel="stylesheet"
                    id="wd-woo-page-empty-page-css"
                    href="https://woodmart.xtemos.com/wp-content/themes/woodmart/css/parts/woo-page-empty-page.min.css?ver=7.3.0"
                  type="text/css"
                    media="all"
                  />
                  <div className="icon_cart_disabled">
                    <RemoveShoppingCartIcon color="disabled" style={{ height: '50px' }} />
                  </div>
                  <p class="wd-empty-page wc-empty-cart-message">Your cart is currently empty. </p>
                  <div class="wd-empty-page-text">
                    Before proceed to checkout you must add some products to your shopping cart.
                    <br /> You will find a lot of interesting products on our "Shop" page.{' '}
                  </div>
                  <p class="return-to-shop">
                    <a class="button wc-backward" href="#">
                      Return to shop
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
