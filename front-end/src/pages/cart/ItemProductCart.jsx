import React, { useState } from 'react';
import { fCurrency } from 'src/utils/formatNumber';

const ItemProductCart = ({ handlerItemBuy, item, handleDeleteItemProduct }) => {
  const [quantity, setQuantity] = useState(item.quantityBuy);

  const onChangeQuantity = (number, item) => {
    let result = quantity + number;
    if (result <= 0) {
      handleDeleteItemProduct(item);
      return;
    }
    setQuantity(result);
    handlerItemBuy(result, item.id);
  };
  return (
    <ul className="list">
      <li className="single dflex">
        <div className="product col-6 dflex">
          <div onClick={() => handleDeleteItemProduct(item)} className="deleteProduct">
            <i className="fas fa-times"></i>
          </div>
          <div className="imageProduct">
            <img src={`${item.image}`} alt="" />
          </div>
          <div className="nameProduct">
            <a href="#">{item.name}</a>
          </div>
        </div>
        <div className="priceProduct col-2">{fCurrency(item.price)}</div>
        <div className="dflex quantityProduct col-2">
          <button
            id="minus"
            onClick={() => {
              onChangeQuantity(-1, item);
            }}
          >
            -
          </button>
          <input type="text" value={item.quantityBuy} readOnly />
          <button
            id="plus"
            onClick={() => {
              onChangeQuantity(+1, item);
            }}
          >
            +
          </button>
        </div>
        <div className="total col-2">{fCurrency(item.quantityBuy * item.price)}</div>
      </li>
    </ul>
  );
};

export default ItemProductCart;
