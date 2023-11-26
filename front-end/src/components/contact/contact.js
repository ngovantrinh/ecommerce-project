import React from 'react';
import otp2 from '../../pages/images/home/about-us2-2.jpg';

const Contact = () => {
  return (
    <div class="contact dflex">
      <div class="contact__item col-lg-6 col-12">
        <h4 class="firstTitle">ALL-IN-ONE ECOMMERCE SOLUTION</h4>
        <h4 class="title">ABOUT OUR WOODMART STORE</h4>
        <p>
          Nec adipiscing luctus consequat penatibus parturient massa cubilia etiam a adipiscing enigm dignissim congue
          egestas sapien a. Scelerisque ac non ut ac bibendum himenaeos ullamcorper justo himenaeos vel a sapien quis.
        </p>
        <a class="btn active">Read More</a>
      </div>
      <div class="contact__item col-lg-6 col-12">
        <img src={otp2} alt="" />
      </div>
    </div>
  );
};

export default Contact;
