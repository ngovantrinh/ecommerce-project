import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import fur1 from '../../pages/images/home/product/product-furniture-4-2-430x491.jpg';
import fur2 from '../../pages/images/home/product/product-furniture-4-3-430x491.jpg';
import acc2 from '../../pages/images/home/product/product-accessories-8-1-430x490.jpg';
import acc10 from '../../pages/images/home/product/product-accessories-10-430x490.jpg';
import acc102 from '../../pages/images/home/product/product-accessories-10-2-430x490.jpg';
import acc11 from '../../pages/images/home/product/product-furniture-11-430x490.jpg';
import acc19 from '../../pages/images/home/product/product-furniture-19-3-430x490.jpg';
import ip16 from '../../pages/images/home/product/dock-black-walnut-ip6-grid-A4_7-430x490.jpg';
import ip14 from '../../pages/images/home/product/product-furniture-14-430x491.jpg';
import fur8 from '../../pages/images/home/product/product-furniture-8-430x490.jpg';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { fCurrency } from 'src/utils/formatNumber';

function IsotopeProduct({ listProduct, loading }) {
  const gridRef = useRef(null);
  const isotope = useRef(null);
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/detailProduct/${id}`);
  };

  useEffect(() => {
    if (listProduct) {
      isotope.current = new Isotope(gridRef.current, {
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        transitionDuration: 500
      });
      setTimeout(() => {
        handleFilter('*');
      }, 1000);
    }
  }, [listProduct]);

  // Function to filter items
  const handleFilter = (filterValue) => {
    isotope.current.arrange({
      filter: filterValue
    });
  };

  // if (loading) {
  //   return <h2>Loading</h2>;
  // }
  console.log(listProduct, 'listProduct');
  return (
    <div>
      <div className="featureProduct">
        <div className="firstTitle">Wooden Accessories</div>
        <h4 className="title">Featured Products</h4>
        <div className="lastTitle">Visit our shop to see amazing creations form our designers.</div>
        <div className="feature__filter">
          <div className="button-group filters-button-group feature__buttons">
            <button onClick={() => handleFilter('*')} className="button is-checked">
              Best Sellers
            </button>
            <button onClick={() => handleFilter('.featured')} className="button">
              Featured
            </button>
            <button onClick={() => handleFilter('.sale')} className="button">
              Sales
            </button>
          </div>
          <ul className="featureSlider">
            <li className="grid features__grid" ref={gridRef}>
              {listProduct?.map((item, index) => (
                <div
                  key={item.id}
                  className={`element-item features__item col-lg-3 col-sm-6 col-12 ${
                    index % 2 === 0 ? 'sale' : 'featured'
                  }`}
                >
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => goToDetail(item.id)}
                    className="features__image desk sale"
                  >
                    <img src={item.image} alt="" />
                    <div className="image__overlay">
                      <div className="color">
                        <div className="image" data-image={fur2}></div>
                      </div>
                      <a className="share" href="#">
                        <i className="fas fa-random"></i>
                      </a>
                    </div>
                  </div>
                  <div className="features__content">
                    <a className="link" onClick={() => goToDetail(item.id)}>
                      Wooden single drawer
                    </a>
                    <a className="sub-link" href="#">
                      Furniture
                    </a>
                    <p className="price">{fCurrency(item.salePrice)}</p>
                    <div className="content__overlay">
                      <div
                        style={{ color: 'black' }}
                        dangerouslySetInnerHTML={{ __html: `${item.description?.slice(0, 100)}...` }}
                      />
                      <div className="control dflex">
                        <a href="#">
                          <i className="far fa-heart"></i>
                        </a>
                        <Button onClick={() => goToDetail(item.id)}>View Products</Button>
                        <a href="#">
                          <i className="fas fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IsotopeProduct;
