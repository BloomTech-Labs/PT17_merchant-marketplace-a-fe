import React from 'react';
import './getOrders.css';
import marketImage from './market.jpg';

function BuyersOrders() {
  return (
    <div className="buyers-order-container">
      <div className="order-content">
        <div className="order-information">
          <div>
            <h2> Order Date</h2>
            <h3> The Date</h3>
          </div>

          <div>
            <h2> Total Cost</h2>
            <h3> $$$$ </h3>
          </div>

          <div>
            <h2> Order Id</h2>
            <h3> ID Numer ######</h3>
          </div>
        </div>

        <div className="order-details-container">
          <div className="order-details">
            <div>
              <img className="order-image" src={marketImage} />
            </div>
            <div className="item-details-one">
              <div>
                <h3> Item Name ...........</h3>
                <button> Order Again</button>
              </div>
            </div>

            <div className="item-details-two">
              <h3> Shipment Status</h3>
              <h2> Status</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuyersOrders;
