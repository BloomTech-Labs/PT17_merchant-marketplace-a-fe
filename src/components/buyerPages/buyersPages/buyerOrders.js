import React from 'react';
import './buyersOrders.css';
import BuyersNav from './buyersNav/buyerNavSearch/buyersNav';
import GetBuyerOrders from './getBuyerOrders/getBuyersOrders';

function BuyerOrders() {
  return (
    <div className="buyers-orders-container">
      <BuyersNav />
      <GetBuyerOrders />
    </div>
  );
}

export default BuyerOrders;
