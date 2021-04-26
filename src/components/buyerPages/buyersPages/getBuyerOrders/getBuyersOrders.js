import React from 'react';
import BuyersOrders from './buyersOrders';

function GetBuyerOrders() {
  return (
    <div className="buyers-orders-content-page">
      <BuyersOrders className="buyers-item" />
      <BuyersOrders className="buyers-item" />
      <BuyersOrders className="buyers-item" />
      <BuyersOrders className="buyers-item" />
      <BuyersOrders className="buyers-item" />
    </div>
  );
}

export default GetBuyerOrders;
