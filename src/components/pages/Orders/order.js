// Template for what each specific order will look like on the orders page

import React from 'react';
import './orders.css';
import logo from './inventory-logo.png';

function Order(props) {
  return (
    <div className="orders-page">
      <div className="order-container">
        <div className="order-heading">
          <div>
            <h3> Order Placed </h3>
            <h2> 04/20/21</h2>
          </div>
          <div>
            <h3> Shipping To</h3>
            <h2> {props.shipto}</h2>
          </div>
          <div className="order-quantity-data">
            <h3 className="order-quantity">Order Quantity</h3>
            <h2>{props.orderquan}</h2>
          </div>
        </div>

        <div className="order-item-container">
          <img alt="Merchant Marketplace Logo" src={logo} />

          <div className="order-description">
            <div className="item-name-container">
              <h2> {props.name}</h2>
            </div>

            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
