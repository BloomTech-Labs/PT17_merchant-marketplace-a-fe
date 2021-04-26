import React from 'react';

function BuyersNav() {
  return (
    <div className="buyers-nav-container">
      <div className="buyers-nav-main-container">
        <div className="buyers-nav-heading-container">
          <h1 className="buyers-nav-header">Your Orders</h1>
        </div>

        <div className="buyers-nav-bar-container">
          <ul>
            <li>Orders</li>

            <li>Buy Again</li>

            <li>Cancelled Orders</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default BuyersNav;
