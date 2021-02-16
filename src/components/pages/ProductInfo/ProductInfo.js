import { useOktaAuth } from '@okta/okta-react';
import React, { useEffect, useState } from 'react';
import { getDSData } from '../../../api';
import ProductCarousel from '../ProductPage/ProductCarousel';
import { Rate, Avatar, Tag } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const ProductInfo = ({ item }) => {
  const [img, setImg] = useState('');
  const [sellerProfile, setSellerProfile] = useState({});
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const { authState } = useOktaAuth();
  let oktaStore = JSON.parse(localStorage['okta-token-storage']);
  let seller_profile_id = oktaStore.idToken.claims.sub;

  //<----------------Get Element---------------->
  const getElement = (id, url, setState, errMessage) => {
    getDSData(`${process.env.REACT_APP_API_URI}${url}${id}`, authState)
      .then(res => setState(res))
      .catch(err => {
        console.log(errMessage);
      });
  };
  //<----------------Get Image---------------->
  const imgGet = id => {
    getDSData(`${process.env.REACT_APP_API_URI}photo/${id}`, authState)
      .then(res => setImg(res[0]['url']))
      .catch(err => {
        console.log('Img get fail in ProductInfo.');
      });
  };

  useEffect(() => {
    imgGet(item.id);
    getElement(
      seller_profile_id,
      'profile/',
      setSellerProfile,
      'Seller Name get fail in ItemCard'
    );
    getElement(
      item.id,
      'category/',
      setCategories,
      'Category get fail in ItemCard'
    );
    getElement(item.id, 'tag/item/', setTags, 'Tag get fail in ItemCard');
  }, []);

  let dollars = item.price_in_cents / 100;
  return (
    <div className="product-page">
      <div className="product-container">
        <div>
          {/* <ProductCarousel /> */}
          {/* {The carrousel avobe can be implemented later} */}
          <img src={img} />
        </div>

        <div className="item">
          <div className="name-price">
            <p>{item.item_name}</p>
            <p>${dollars}</p>
          </div>
          <div className="rating">
            <Rate />
          </div>
          <div className="store-name">
            <Avatar size="small" icon={<GlobalOutlined />} />
            <h3>Store: {sellerProfile.seller_name}</h3>
          </div>
          <p>Location: {sellerProfile.physical_address}</p>
          <section>
            <p>{item.description}</p>
            {item.quantity_available !== 0 ? (
              <h2 style={{ color: 'green' }}>QTY: {item.quantity_available}</h2>
            ) : (
              <h2 style={{ color: 'red' }}>QTY: {item.quantity_available}</h2>
            )}
          </section>

          <div
            className="category-tag "
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <h3>Categories: </h3>
            {categories.map(category => (
              <Tag className="tags" style={{ width: 'auto' }} key={category.id}>
                {category.category_name}
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <section className="tags-container" style={{ paddingLeft: '12rem' }}>
        {tags.map(tag => (
          <Tag className="tags" style={{ width: 'auto' }} key={tag.id}>
            {tag.tag_name}
          </Tag>
        ))}
      </section>
    </div>
  );
};

export default ProductInfo;
