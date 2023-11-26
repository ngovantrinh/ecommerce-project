import React from 'react';
import img1 from '../../pages/images/home/layouts/retail-demos-opt.jpg';
import img2 from '../../pages/images/home/layouts/books-demos-opt-2.jpg';
import img3 from '../../pages/images/home/layouts/handmade-demos.jpg';
import img4 from '../../pages/images/home/layouts/travel-demos.jpg';
import img5 from '../../pages/images/home/layouts/marketplace-demos.jpg';
import img6 from '../../pages/images/home/layouts/prefooter-preview-opt-2.jpg';
import img7 from '../../pages/images/home/layouts/decor-demos-opt-2.jpg';

const LayoutStatic = () => {
  return (
    <div class="layout dflex">
      <div class="layout__item col-lg-4 col-12">
        <div class="firstTitle">Prebuilt Layouts</div>
        <h4 class="title">Woodmart Demos</h4>
        <p>High-quality demos and layouts.</p>
        <a class="link" href="#">
          View All
        </a>
      </div>
      <div class="layout__item col-lg-8 col-12">
        <ul class="layout__wrap" id="wrap">
          <li>
            <img src={img1} alt="" />
          </li>
          <li>
            <img src={img2} alt="" />
          </li>
          <li>
            <img src={img3} alt="" />
          </li>
          <li>
            <img src={img4} alt="" />
          </li>
          <li>
            <img src={img5} alt="" />
          </li>
          <li>
            <img src={img6} alt="" />
          </li>
          <li>
            <img src={img7} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LayoutStatic;
