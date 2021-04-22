// this component will eventually be the axios call to get orders from the api.
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Order from './order';
import { useOktaAuth } from '@okta/okta-react';
import { getOrdersData, getProfileData } from '../../../api';
import Orders from './orders';

// import apiAuthGet from '../../../api/index'

const GetOrders = () => {
  const { authState, authService } = useOktaAuth();

  const [orderData, setOrders] = useState([]);

  // const user = (await authService.getUser()).sub

  // const test = getOrdersData(authState)
  // console.log(test)
  useEffect(() => {
    getOrdersData(authState).then(response => {
      setOrders(response.data);
    });
  }, []);

  console.log(orderData);

  return orderData.length >= 1 ? (
    <div className="orders">
      {orderData.map(order => (
        <div key={order.id}>
          <Order
            name={order.item_name}
            shipto={order.buyer_id}
            description={order.description}
            orderquan={order.quantity}
            availquan={order.quantity_available}
          />
        </div>
      ))}
    </div>
  ) : (
    <h2> Loading</h2>
  );
};

export default GetOrders;
