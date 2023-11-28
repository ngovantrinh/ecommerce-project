import React from 'react';

const DescriptionTab = () => {
  return (
    <>
      <div className="item dflex active">
        <div className="content col-4">
          <h5 className="footerTitle">Maecenas Iaculis</h5>
          <p>
            <img src="./images/shop/brand/brand-Rosenthal.png" alt="" />
            Nunc per mollis pot enti amet imperdiet blandit dis eu sociosqu accumsan dap ibus ultricies tristique montes
            a deros adipiscing a justo. Aliquet mus a aptent ullamcorper metus accumsan. Habitasse a purus nec ipsum a
            urna ac ullamcorper varius metus blandit posuere.
          </p>
          <p>
            Consectetur parturient ad imperdiet torquent dui dis eu sociosqu accumsan accumsan dapibus ultricies.
            Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibur.
          </p>
        </div>
        <div className="content col-4">
          <h5 className="footerTitle">FEUGIAT PARTURIENT</h5>
          <p>
            Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae
            elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante a mollis habitant duis
            urna cum iaculis ullamcorper luctus.
          </p>
          <ul>
            <li>65% Polyester, 23% Elastane</li>
            <li>Abitur parturient praesent ipsu</li>
            <li>Minceptos pri 187cm/3’1.3″ tall</li>
            <li>Diam parturient dictumst nibh mu</li>
          </ul>
        </div>
        <div className="content col-4">
          <h5 className="footerTitle">FEUGIAT PARTURIENT</h5>
          <p>
            Model’s height: 4’2.2”/184 cm
            <br />
            Model is wearing: Size Large
          </p>
          <h5 className="footerTitle">ALIQUET</h5>
          <p>Quam suspendisse adipiscing quis pretium nostra cubilia tristique nam non ac placerat nascetur a vel.</p>
          <h5 className="footerTitle">CURABITUR VELIT</h5>
          <p>Main: 76% Polyester, 24% Elastane.</p>
        </div>
      </div>
      <div className="item dflex" style={{ textAlign: 'center' }}>
        <div className="col-6" style={{ padding: '3rem 0' }}>
          <a className="link active" href="#">
            Brand
          </a>
        </div>
        <div className="col-6" style={{ padding: '3rem 0' }}>
          <a className="link" href="#">
            Klober
          </a>
        </div>
      </div>
      <div className="item dflex review">
        <div className="content col-6">
          <h5 className="footerTitle">1 review for Light wood consectetur</h5>
          <div className="client dflex">
            <div className="client__avater col-2">
              <img src="./images/singleProduct/avatar.jpeg" alt="" />
            </div>
            <div className="client__content col-10">
              <span>
                <strong>admin</strong>- March 9, 2017
              </span>
              <span className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <p>
                Hac parturient a parturient a ante ut a vel netus sem nisl a a cubilia scelerisque arcu vestibulum
                nascetur adipiscing pharetra amet erat convallis suspendisse cum. Adipiscing a nunc erat vulputate
                iaculis faucibus id sapien fermentum
              </p>
            </div>
          </div>
        </div>
        <div className="content col-6">
          <h5 className="footerTitle">Add A Review</h5>
          <p>Your email address will not be published. Required fields are marked </p>
          <p>
            Your rating:
            <span className="stars">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </span>
          </p>
          <form action="#">
            <p>Your Review</p>
            <textarea></textarea>
            <div className="dflex">
              <div className="input">
                <label for="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="input">
                <label for="Email">Email</label>
                <input type="text" id="email" />
              </div>
            </div>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="item dflex brand">
        <div className="content col-4">
          <img src="./images/singleProduct/klobe.png" alt="" style={{ marginBottom: '20px', width: '170px' }} />
          <p>
            Parturient ut id tellus vulputatre ac ultrlices a part ouriesnt sapien dignissim{' '}
            <a href="#">
              <strong>partu rient</strong>
            </a>{' '}
            a a inter drum vehicula. Ornare metus laoreet tincidunt{' '}
            <a href="#">
              <strong>eros rolem</strong>
            </a>
            tristique pretium malada.
          </p>
          <p>
            <em>
              Cras rhoncus vivamus luctus platea arcu laoreet selm. Curae est condenectus sed hac a parturient
              vestibulum.
            </em>
          </p>
          <a className="link" href="#">
            MORE PRODUCTS
          </a>
        </div>
        <div className="content col-8 dflex">
          <img src="./images/shop/product/tie-1.jpg" alt="" />
          <img src="./images/shop/product/wood-1.jpg" alt="" />
          <img src="./images/shop/product/watch-black.jpg" alt="" />
        </div>
      </div>
      <div className="item dflex shipping">
        <div className="content col-6">
          <img src="./images/singleProduct/wood-ship-1.jpg" alt="" style={{ width: '47%', margin: '0 5px' }} />
          <img src="./images/singleProduct/wood-ship-3.jpg" alt="" style={{ width: '47%', margin: '0 5px' }} />
        </div>
        <div className="content col-6">
          <h5 className="footerTitle">MAECENAS IACULIS</h5>
          <p>
            Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum
            parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque
            adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.
          </p>
          <h5 className="footerTitle">ADIPISCING CONVALLIS BULUM</h5>
          <ul>
            <li>Vestibulum penatibus nunc dui adipiscing convallis bulum parturient suspendisse.</li>
            <li>Abitur parturient praesent lectus quam a natoque adipiscing a vestibulum hendre.</li>
            <li>Diam parturient dictumst parturient scelerisque nibh lectus.</li>
          </ul>
          <p>
            Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus
            lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac
            parturient scelerisque vestibulum amet elit ut volutpat.
          </p>
        </div>
      </div>
    </>
  );
};

export default DescriptionTab;
