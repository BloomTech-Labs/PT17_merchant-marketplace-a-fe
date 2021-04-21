import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

const FeaturedProduct = props => {
  const dollars = (props.item.price_in_cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <div className="feature_card">
      <Link to="/" className="feature_card_link">
        <img src={props.item.images[0]} className="product_img" />
        <p className="product_title">{props.item.item_name}</p>
        <p className="price">{dollars}</p>
      </Link>
    </div>
  );
};

export default FeaturedProduct;
