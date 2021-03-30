// Template for what each specific order will look like on the orders page

import React from 'react';
import './orders.css';
import logo from './inventory-logo.png';

function Order() {
  return (
    <div className="orders-page">
      <div className="order-container">
        <div className="order-heading">
          <div>
            <h3>Status</h3>
            <h2> Pending</h2>
          </div>

          <div>
            <h3> Order Placed </h3>
            <h2> 2/21/21</h2>
          </div>
          <div>
            <h3> Shipping To</h3>
            <h2> Steve Jobs</h2>
          </div>
        </div>

        <div className="order-item-container">
          <img src={logo} />

          <p className="order-description">
            description of item - Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
