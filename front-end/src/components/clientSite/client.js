import React from 'react';
import img1 from '../../pages/images/home/clients/brand-witra.png';
import img2 from '../../pages/images/home/clients/brand-Rosenthal.png';
import img3 from '../../pages/images/home/clients/brand-PackIt.png';
import img4 from '../../pages/images/home/clients/nichemodern.png';
import img5 from '../../pages/images/home/clients/brand-Magisso.png';
import img6 from '../../pages/images/home/clients/brand-Louis-Poulsen.png';
import img7 from '../../pages/images/home/clients/klobe2r.png';
import img8 from '../../pages/images/home/clients/brand-Joseph-Joseph.png';

const ClientSide = () => {
  return (
    <div class="clients">
      <div class="clients__wrap dflex" id="wrap">
        <div class="client__item col-lg-2 col-sm-3 col-4">
          <img src={img1} alt="" />
        </div>
        <div class="client__item col-lg-2 col-sm-3 col-4">
          <img src={img2} alt="" />
        </div>
        <div class="client__item col-lg-2 col-sm-3 col-4">
          <img src={img3} alt="" />
        </div>
        <div class="client__item col-lg-2 col-sm-3 col-4">
          <img src={img4} alt="" />
        </div>
        <div class="client__item col-lg-2 col-sm-3 col-4">
          <img src={img5} alt="" />
        </div>
        <div class="client__item col-lg-2 col-sm-3 col-4">
          <img src={img6} alt="" />
        </div>
        <div class="client__item col-lg-2 col-sm-3 col-4">
          <img src={img7} alt="" />
        </div>
        <div class="client__item col-lg-2 col-sm-3 col-4">
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientSide;
