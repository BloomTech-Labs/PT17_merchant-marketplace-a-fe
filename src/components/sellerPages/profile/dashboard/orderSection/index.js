import React from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../../../../common/cards/orderCard';

function OrderSection() {
  return (
    <>
      <h4>$250.00</h4>
      <h9>+32% since last month</h9>
      {/* <OrderCard
        orderNumber="#1"
        name="Name McName"
        status="Pick-Up"
        price={3.33}
        itemCount={9}
      /> */}
      <Link path to="/myprofile/orders">
        {/* <Link className="activeLink"> */}
        <button
          className="activeLink"
          type="button"
          class="btn btn-primary float-right"
        >
          View Orders
        </button>
      </Link>
      {/* <h4>Fullfiled & cancelled</h4> */}
      {/* <OrderCard
        orderNumber="#0"
        name="Name McName"
        status="Pick-Up"
        price={3.33}
        itemCount={9}
      /> */}
    </>
  );
}
export default OrderSection;
