import React from 'react';
import SmallItemCard from '../../../../common/cards/smallItem';
import { WechatOutlined, PlusOutlined } from '@ant-design/icons';
import './customStyles.css';
import { Link } from 'react-router-dom';
import { Chart } from 'react-charts';

function CustomerSection() {
  return (
    <>
      <div className="customerHeader">
        <h2>Total Orders</h2>
        <div>
          <WechatOutlined />
          <PlusOutlined />
        </div>
      </div>

      <h3>204</h3>
      {/* <SmallItemCard headerText={36} descText="Customers" /> */}
      <Link path to="/Orders">
        <button type="button" class="btn btn-primary float-right">
          View Orders
        </button>
      </Link>
    </>
  );
}

export default CustomerSection;
