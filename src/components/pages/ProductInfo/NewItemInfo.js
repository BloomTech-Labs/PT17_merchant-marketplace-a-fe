import React from 'react';
import { Rate, Avatar, Tag } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const NewItemInfo = ({ photos, mainInfo, specForm }) => {
  let dollars = mainInfo.price_in_cents / 100;
  return (
    <div className="product-page">
      <div className="product-container-newitem">
        <div>
          <img src={photos} />
        </div>

        <div className="newitem">
          <div className="name-price">
            <p>
              {mainInfo.item_name}
              <span> ${dollars}</span>
            </p>
          </div>

          <div className="store-name-newitem">
            <Avatar size="small" icon={<GlobalOutlined />} />
            <h3>Store Name</h3>
          </div>

          <section>
            <p>
              <span>Description: </span>
              {mainInfo.description}
            </p>
            {mainInfo.quantity_available !== 0 ? (
              <h2 style={{ color: 'green' }}>
                QTY: {mainInfo.quantity_available}
              </h2>
            ) : (
              <h2 style={{ color: 'red' }}>
                QTY: {mainInfo.quantity_available}
              </h2>
            )}
          </section>
        </div>
      </div>
      <section className="tags-container">
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
      </section>
    </div>
  );
};

export default NewItemInfo;
