import React from 'react';
import { getExampleData, getProfileData, apiAuthGetOrders } from '../../../api';
import NavBar from '../../common/navBar';
import GetOrders from './getOrders';

export default class Orders extends React.Component {
  render() {
    return (
      <div className="orders-page-container">
        <NavBar />
        <GetOrders />
      </div>
    );
  }
}
