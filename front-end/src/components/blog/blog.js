import React from 'react';
import img1 from '../../pages/images/home/news/blog-grid-9-388x273.jpg';
import img2 from '../../pages/images/home/news/avatar-home.jpg';
import img3 from '../../pages/images/home/news/blog-grid-13-388x273.jpg';
import img4 from '../../pages/images/home/news/avatar-home.jpg';
import img5 from '../../pages/images/home/news/blog-grid-12-388x273.jpg';
import img6 from '../../pages/images/home/news/avatar-home.jpg';

const Blog = () => {
  return (
    <div class="blog">
      <div class="firstTitle">FURNITURE GUIDES</div>
      <h4 class="title">OUR LATEST NEWS</h4>
      <div class="lastTitle">Latest trends and inspiration in interior design.</div>
      <div class="blog__wrap dflex">
        <div class="blog__item col-3-5">
          <div class="blog__image">
            <img src={img1} alt="" />
            <div class="image__overlay">
              <span>23</span>JUL
            </div>
            <div class="image__overlay2 dflex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="blog__content">
            <a class="heading" href="#">
              Seating collection inspiration
            </a>
            <p class="info">
              Posted by
              <img src={img2} alt="" />
              S. Rogers<i class="far fa-comment"></i>
              <i class="fas fa-share-alt"></i>
            </p>
            <p>
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et
              vestibulum duis a tincidunt per a ...
            </p>
            <a class="link active" href="#">
              CONTINUE READING
            </a>
          </div>
        </div>
        <div class="blog__item col-3-5">
          <div class="blog__image">
            <img src={img3} alt="" />
            <div class="image__overlay">
              <span>23</span>JUL
            </div>
            <div class="image__overlay2 dflex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="blog__content">
            <a class="heading" href="#">
              Creative water features and exterior
            </a>
            <p class="info">
              Posted by
              <img src={img4} alt="" />
              S. Rogers<i class="far fa-comment"></i>
              <i class="fas fa-share-alt"></i>
            </p>
            <p>
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et
              vestibulum duis a tincidunt per a ...
            </p>
            <a class="link active" href="#">
              CONTINUE READING
            </a>
          </div>
        </div>
        <div class="blog__item col-3-5">
          <div class="blog__image">
            <img src={img5} alt="" />
            <div class="image__overlay">
              <span>23</span>JUL
            </div>
            <div class="image__overlay2 dflex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="blog__content">
            <a class="heading" href="#">
              Exterior ideas: 10 colored garden seats
            </a>
            <p class="info">
              Posted by
              <img src={img6} alt="" />
              S. Rogers<i class="far fa-comment"></i>
              <i class="fas fa-share-alt"></i>
            </p>
            <p>
              Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et
              vestibulum duis a tincidunt per a ...
            </p>
            <a class="link active" href="#">
              CONTINUE READING
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
