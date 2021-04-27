import React from 'react';
import { WechatOutlined, PlusOutlined } from '@ant-design/icons';
import './customStyles.css';
import { Link } from 'react-router-dom';

function CustomerSection() {
  return (
    <>
      <div className="customerHeader">
        <div>
          <WechatOutlined />
          <PlusOutlined />
        </div>
      </div>

      <Link>
        <button type="button" class="btn btn-primary float-right">
          View Messages
        </button>
      </Link>
    </>
  );
}

export default CustomerSection;
