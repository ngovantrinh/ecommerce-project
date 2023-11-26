import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
// material
import { Box, Link, Container, Typography } from '@material-ui/core';
// components
import Logo from '../../components/Logo';
import logo2 from '../../pages/images/logo/wood-logo-dark.svg';

import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';
import { Helmet } from 'react-helmet';
import Nav from 'src/components/nav/Nav';
import Menu from 'src/components/Menu/Menu';
import MobileMenu from 'src/components/MobileMenu/MobileMenu';
import '../../pages/staticCss/bootstrap.min.css';

import '../../pages/staticCss/tiny-slider.css';
import '../../pages/staticCss/style.css';
import '../../pages/css/main.css';
import useHome from 'src/pages/js/useHome';
import Footer from 'src/components/footer/footer';
import { useEffect } from 'react';
import useCart from 'src/pages/cart/useCart';
import useAuth from 'src/hooks/useAuth';
import CartService from 'src/services/cart';
import { useSelector } from 'react-redux';
// ----------------------------------------------------------------------

export default function MainLayout() {
  const { fetchCart } = useCart();
  let cartId = localStorage.getItem('cartId');

  useHome();
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const navigate = useNavigate();
  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchCart(cartId);
  }, [fetchCart]);

  const goShop = () => {
    navigate('/shop');
  };
  return (
    <div className="mainn" style={{ background: 'white' }}>
      {/* <MainNavbar /> */}

      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Helmet>

      <div id="onTop"></div>

      <div className="loader dflex">
        <img src={logo2} alt="" />
        <div className="dflex">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <a className="onTop dflex" href="#onTop">
        <i className="fas fa-angle-up" />
      </a>

      <header>
        <div className="header__wrap container dflex">
          <ul className="header__item dflex left">
            <li className="header__list">
              <span>English</span>
              <i className="fas fa-angle-down"></i>
              <ul className="sub">
                <li>
                  <span>Deutsch</span>
                </li>
                <li>
                  <span>French</span>
                </li>
                <li>
                  <span>Requires WPML plugin</span>
                </li>
              </ul>
            </li>
            <li className="header__list">
              <span>Country</span>
              <i className="fas fa-angle-down"></i>
              <ul className="sub">
                <li>
                  <span>United States (USD)</span>
                </li>
                <li>
                  <span>Deutschland (EUR)</span>
                </li>
                <li>
                  <span>Japan (JPY)</span>
                </li>
              </ul>
            </li>
            <li className="header__list">
              <span>Free Shipping For All Order Of $150</span>
            </li>
          </ul>
          <ul className="header__item dflex right">
            <li className="header__list social dflex">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li className="header__list">
              <i className="far fa-envelope"></i>
              <span>Newsletter</span>
            </li>
            <li className="header__list">
              <span>Contact Us</span>
            </li>
            <li className="header__list">
              <span>Faqs</span>
            </li>
          </ul>
        </div>
      </header>

      <Nav />
      <Menu />
      <div className="closeMenu"></div>
      <MobileMenu />
      <div className="moblie-navBottom dflex">
        <a className="link" href="/shop">
          <i className="fas fa-store"></i>
          <p>Shop</p>
        </a>
        <a className="link" href="#">
          <i className="fas fa-filter"></i>
          <p>Filters</p>
        </a>
        <a className="link" href="#">
          <i className="fas fa-heart"></i>
          <p>Wishlist</p>
        </a>
        <a className="link" href="#">
          <i className="fas fa-user"></i>
          <p>My Account</p>
        </a>
        <a className="link" href="#">
          <i className="fas fa-random"></i>
          <p>Compare</p>
        </a>
      </div>
      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
