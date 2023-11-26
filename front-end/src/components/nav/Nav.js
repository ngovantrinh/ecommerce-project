import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';

const Nav = () => {
  const { carts } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('keyword') || '';
  const [keyword, setKeyword] = useState(searchName);
  const { user, updateProfile } = useAuth();

  console.log(user, 'user');
  const onSearch = () => {
    searchParams.set('keyword', keyword || '');
    navigate(`/shop?keyword=${keyword}`);
  };

  const goToDashboard = () => {
    navigate('/dashboard/app');
  };

  const goCart = () => {
    navigate('/cart');
  };

  return (
    <div className="nav">
      <div className="nav__wrap container dflex">
        <div className="nav__button">
          <i className="fas fa-bars" />
          MENU
        </div>
        <a className="nav__logo" href="index.html">
          <img src="./images/logo/wood-logo-dark.svg" alt="" />
        </a>
        <div className="nav__search dflex">
          <input
            defaultValue={searchName}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="Search for Products"
          />
          <select name="search">
            <option value="Select Category">Select Category</option>
            <option value="Accessories">Accessories</option>
            <option value="Clocks">Clocks</option>
            <option value="Cooking">Cooking</option>
            <option value="Furniture">Furniture</option>
            <option value="Lighting">Lighting</option>
            <option value="Toys">Toys</option>
            <option value="Uncategorized">Uncategorized</option>
          </select>
          <a onClick={onSearch}>
            <i className="fas fa-search" />
          </a>
        </div>
        <div className="nav__notify dflex">
          {user?.username ? (
            <div style={{ cursor: 'pointer' }} onClick={goToDashboard}>
              {user.username}
            </div>
          ) : (
            <a className="link" href="/auth/login">
              Login / Register
            </a>
          )}

          <div style={{ cursor: 'pointer' }} className="icon">
            <i className="far fa-heart" />
          </div>
          <div style={{ cursor: 'pointer' }} className="icon" data-notify="0">
            <i className="fas fa-random" />
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={goCart}
            className="icon reponsive"
            data-notify={carts?.cart?.length || 0}
          >
            <i className="fas fa-shopping-bag"></i>
          </div>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
