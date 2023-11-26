import React from 'react';
import brand1 from '../../images/shop/brand/brand-alessi.png';
import brand2 from '../../images/shop/brand/brand-Eva-Solo.png';
import brand3 from '../../images/shop/brand/brand-flos.png';
import brand4 from '../../images/shop/brand/brand-hay.png';
import brand5 from '../../images/shop/brand/brand-Joseph-Joseph.png';
import brand6 from '../../images/shop/brand/brand-Louis-Poulsen.png';
import brand7 from '../../images/shop/brand/brand-Magisso.png';
import brand8 from '../../images/shop/brand/brand-PackIt.png';
import brand9 from '../../images/shop/brand/brand-Rosenthal.png';
import brand10 from '../../images/shop/brand/brand-witra.png';
import brand11 from '../../images/shop/brand/klobe2r.png';
import brand12 from '../../images/shop/brand/nichemodern.png';

function BrandFilter() {
  return (
    <>
      <li className="filterOptions">
        <h5 className="footerTitle">FILTER BY BRAND</h5>
        <ul className="brand">
          <li className="dflex">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
          </li>
          <li className="dflex">
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
          </li>
          <li className="dflex">
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
          </li>
          <li className="dflex">
            <img src={brand7} alt="" />
            <img src={brand8} alt="" />
          </li>
          <li className="dflex">
            <img src={brand9} alt="" />
            <img src={brand10} alt="" />
          </li>
          <li className="dflex">
            <img src={brand11} alt="" />
            <img src={brand12} alt="" />
          </li>
        </ul>
      </li>
    </>
  );
}

export default BrandFilter;
