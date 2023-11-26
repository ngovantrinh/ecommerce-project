import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import useProduct from './useProduct';
import chairOrm from '../images/shop/product/chair3-white.jpg';
import ListFilterBtn from './components/ListFilterBtn';
import BrandFilter from './components/BrandFilter';
import ItemProduct from './ItemProduct';
import './style.css';
import { Skeleton } from '@material-ui/core';
import MediaLoading from './components/MediaLoading';
import ProductService from 'src/services/product';
import useCart from '../cart/useCart';
import useAuth from 'src/hooks/useAuth';
import CartService from 'src/services/cart';
// import { useDispatch } from 'react-redux';
// import 'src/pages/css/main.css';
const KEY_OPTION = {
  COLOR: 'color',
  SIZE: 'size',
  MATERIAL: 'material'
};
const Products = () => {
  // const { carts } = useSelector((state) => state.cart);
  // const {fetchCart} = useCart()
  // const dispatch = useDispatch();
  const { user } = useAuth();
  const { carts, createCart } = useCart();
  const { listProduct, loading, fetchProducts } = useProduct({});
  const [selectedValue, setSelectedValue] = useState({
    [KEY_OPTION.COLOR]: '',
    [KEY_OPTION.SIZE]: '',
    [KEY_OPTION.MATERIAL]: ''
  });
  const [dataVariant, setDataVariant] = useState({
    [KEY_OPTION.COLOR]: [],
    [KEY_OPTION.SIZE]: [],
    [KEY_OPTION.MATERIAL]: []
  });



  useEffect(() => {
    const fetchVariants = async () => {
      try {
        const res = await ProductService.getVariantProductFilter();
        if (res && res.success) {
          let variantConvert = {};
          const { data } = res;
          data.map((item) => (variantConvert[item.key] = item.value));
          setDataVariant(variantConvert);
        }
      } catch (error) {}
    };
    fetchVariants();
  }, []);

  const handleChangeSearch = ({ key, value }) => {
    const newData = { ...selectedValue };
    newData[key] = value;
    setSelectedValue(newData);
    fetchProducts({ params: { ...newData } });
  };

  return (
    <div>
      <Banner />
      <div className="closeFilter"></div>
      <div className="shopProduct">
        <div className="shopProduct__wrap dflex container">
          <ul className="product__item col-3 filter">
            <li>
              <h5 className="footerTitle">FILTER BY PRICE</h5>
              <form action="#">
                <input type="range" min="0" max="8000" value="0" />
                <div className="dflex">
                  <p>
                    Price:<span id="value">$0</span>
                  </p>
                  <button type="sumbit">FILTER</button>
                </div>
              </form>
            </li>
            <li className="filterOptions">
              <h5 className="footerTitle">FILTER BY COLOR</h5>
              <ul>
                {dataVariant[KEY_OPTION.COLOR].map((item) => (
                  <li
                    onClick={() => handleChangeSearch({ key: KEY_OPTION.COLOR, value: item.id })}
                    className={`item-fill dflex ${selectedValue[KEY_OPTION.COLOR] === item.id ? 'green-active' : ''}`}
                    key={item.id}
                  >
                    <div className="circle" style={{ background: `${item.value}` }}></div>
                    <p style={{ marginBottom: 0 }}>{item.value}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li className="filterOptions">
              <h5 className="footerTitle">FILTER BY SIZE</h5>
              <ul>
                {dataVariant[KEY_OPTION.SIZE].map((item) => (
                  <li
                    onClick={() => handleChangeSearch({ key: KEY_OPTION.SIZE, value: item.id })}
                    className={`item-fill dflex ${selectedValue[KEY_OPTION.SIZE] === item.id ? 'green-active' : ''}`}
                    key={item.id}
                  >
                    <p className="size">{item.value}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li className="filterOptions">
              <h5 className="footerTitle">FILTER BY MATERIAL</h5>
              <ul>
                {dataVariant[KEY_OPTION.MATERIAL].map((item) => (
                  <li
                    onClick={() => handleChangeSearch({ key: KEY_OPTION.MATERIAL, value: item.id })}
                    className={`item-fill dflex ${
                      selectedValue[KEY_OPTION.MATERIAL] === item.id ? 'green-active' : ''
                    }`}
                    key={item.id}
                  >
                    <p className="size">{item.value}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li className="filterOptions">
              <h5 className="footerTitle">TOP RATED PRODUCTS</h5>
              <ul className="toprate">
                <li className="dflex">
                  <img src="./images/shop/prod-lamp-4-1-430x491.jpg" alt="" />
                  <ul className="content">
                    <li className="content__item">
                      <a className="link" href="#">
                        Montes scelerisque
                      </a>
                      <div className="dflex">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="price">$199.00</div>
                    </li>
                  </ul>
                </li>
                <li className="dflex">
                  <img src="./images/shop/product-furniture-14-430x491.jpg" alt="" />
                  <ul className="content">
                    <li className="content__item">
                      <a className="link" href="#">
                        Decoration for table pen
                      </a>
                      <div className="dflex">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="price">$359.00</div>
                    </li>
                  </ul>
                </li>
                <li className="dflex">
                  <img src="./images/shop/product-furniture-9-2-430x491.jpg" alt="" />
                  <ul className="content">
                    <li className="content__item">
                      <a className="link" href="#">
                        Fiber base chair
                      </a>
                      <div className="dflex">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="price">$299.00</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="product__item col-lg-9 col-12">
            <div className="filter__control dflex">
              <div className="control__item">
                <div className="buttonSidebar">
                  <i className="fas fa-bars"></i>SHOW SIDEBAR
                </div>
                <a href="#">Home</a>
                <span>/</span>
                <a href="#">
                  <strong>Shop</strong>
                </a>
              </div>
              <div className="control__item dflex">
                <div className="filterNumber">
                  <p>
                    <strong>Show:</strong>
                    <span className="number">9</span>
                    <span>/</span>
                    <span className="number active">12</span>
                    <span>/</span>
                    <span className="number">18</span>
                    <span>/</span>
                    <span className="number">24</span>
                  </p>
                </div>
                <ListFilterBtn />
                <div className="filterInput">
                  <select>
                    <option value="Default Sorting">Default Sorting</option>
                    <option value="Sort by popularity">Sort by popularity</option>
                    <option value="Sort by average rating">Sort by average rating</option>
                    <option value="Sort by latest">Sort by latest</option>
                    <option value="Sort by price: low to high">Sort by price: low to high</option>
                    <option value="Sort by price: high to low">Sort by price: high to low</option>
                  </select>
                </div>
              </div>
            </div>
            <ul className="filterProduct gridRow">
              {loading ? (
                <>
                  <MediaLoading />
                </>
              ) : listProduct?.length > 0 ? (
                listProduct?.map((item) => {
                  return <ItemProduct user={user} carts={carts} item={item} key={item.id} />;
                })
              ) : (
                <h1>No Item</h1>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
