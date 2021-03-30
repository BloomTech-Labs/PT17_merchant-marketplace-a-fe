import React from 'react';
import { getExampleData, getProfileData } from '../../../api';
import NavBar from '../../common/navBar';
import GetOrders from './getOrders';

export default class Orders extends React.Component {
  render() {
    console.log({ getProfileData });
    return (
      <div className="orders-page-container">
        <NavBar />
        <GetOrders />
      </div>
    );
  }
}
