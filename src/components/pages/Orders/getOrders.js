// this component will eventually be the axios call to get orders from the api.
import React from 'react';
import axios from 'axios';
import Order from './order';

function GetOrders() {
  // api call to get orders from the back end

  return (
    <div>
      <h1> Orders Summary</h1>
      <ul>
        <div>
          <Order />
        </div>
        <div>
          <Order />
        </div>
        <div>
          <Order />
        </div>
        <div>
          <Order />
        </div>
      </ul>
    </div>
  );
}

export default GetOrders;
