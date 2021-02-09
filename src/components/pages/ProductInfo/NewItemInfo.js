import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Rate, Avatar, Tag } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { getDSData } from '../../../api';

const NewItemInfo = ({ photos, mainInfo, specForm }) => {
  const [sellerProfile, setSellerProfile] = useState({});
  const { authState } = useOktaAuth();
  let oktaStore = JSON.parse(localStorage['okta-token-storage']);
  let seller_profile_id = oktaStore.idToken.claims.sub;

  //<----------------Get Seller Profile---------------->
  const getSellerProfile = id => {
    getDSData(`${process.env.REACT_APP_API_URI}profile/${id}`, authState)
      .then(res => setSellerProfile(res))
      .catch(err => {
        console.log('Seller Name get fail in ItemCard');
      });
  };
  useEffect(() => {
    getSellerProfile(seller_profile_id);
  }, []);
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
            <h3>Store: {sellerProfile.seller_name}</h3>
          </div>
          <p>Location: {sellerProfile.physical_address}</p>
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
