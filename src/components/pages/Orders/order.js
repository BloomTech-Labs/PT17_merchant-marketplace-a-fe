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
            <h3>Item Name</h3>
            <h2> {props.name}</h2>
          </div>

          <div>
            <h3> Order Placed </h3>
            <h2> {props.data}</h2>
          </div>
          <div>
            <h3> Shipping To</h3>
            <h2> {props.shipto}</h2>
          </div>
        </div>

        <div className="order-item-container">
          <img src={logo} />

          <p className="order-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
