import React from 'react';
import cat from '../../pages/images/logo/wood-logo-dark.svg';
import catClock from '../../pages/images/home/cat-klock-430x430.jpg';
import catClock3 from '../../pages/images/home/cat-clock-3-430x430.jpg';
import liCat from '../../pages/images/home/light-cat-5-430x430.jpg';
import payments from '../../pages/images/footer/payments.png';

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="footer__wrap dflex">
          <div class="footer__item col-lg-3 col-sm-6 col-12">
            <img src={cat} alt="" />
            <p>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
            <p>
              <i class="fas fa-paper-plane"></i>451 Wall Street, UK, London
            </p>
            <p>
              <i class="fas fa-mobile-alt"></i>Phone: (064) 332-1233
            </p>
            <p>
              <i class="far fa-envelope"></i>Fax: (099) 453-1357
            </p>
          </div>
          <div class="footer__item col-lg-3 col-sm-6 col-12">
            <h5 class="footerTitle">Recent Posts</h5>
            <ul class="post">
              <li class="dflex">
                <img src="./images/footer/blog-12-75x65.jpg" alt="" />
                <div class="content">
                  <a href="#">A companion for extra sleeping</a>
                  <p>
                    July 23, 2016<span>1 Comment</span>
                  </p>
                </div>
              </li>
              <li class="dflex">
                <img src="./images/footer/blog-11-75x65.jpg" alt="" />
                <div class="content">
                  <a href="#">Outdoor seating collection inspiration</a>
                  <p>
                    July 23, 2016<span>1 Comment</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="footer__item col-lg-2 col-sm-6 col-12">
            <h5 class="footerTitle">Our Stores</h5>
            <ul>
              <li>
                <a class="sub-link" href="#">
                  New York
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  London SF
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Cockfoster BP
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Los Angeles
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Chicago
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Las Vegas
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__item col-lg-2 col-sm-6 col-12">
            <h5 class="footerTitle">Useful Links</h5>
            <ul>
              <li>
                <a class="sub-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Returns
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Term &amp; Conditions
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Latest News
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Our Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__item col-lg-2 col-sm-6 col-12">
            <h5 class="footerTitle">Footer Menu</h5>
            <ul>
              <li>
                <a class="sub-link" href="#">
                  Instagram Profile
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  New Collection
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Woman Dress
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Latest News
                </a>
              </li>
              <li>
                <a class="sub-link" href="#">
                  Purchase Theme
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom dflex">
        <p>
          <a class="link" href="#">
            {' '}
            <strong>WOODMART</strong>
          </a>
          &copy 2019 CREATED BY{' '}
          <a class="link" href="#">
            {' '}
            <strong>TEMOS STUDIO</strong>
          </a>
          . PREMIUM E-COMMERCE SOLUTIONS.
        </p>
        <img src={payments} alt="" />
      </div>
    </>
  );
};

export default Footer;
