import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

const FeaturedProduct = props => {
  return (
    <div className="feature_card">
      <Link to="/">
        <img src={props.item.product_img} className="product_img" />
        <p className="product_title">{props.item.title}</p>
        <p className="price">{props.item.price}</p>
      </Link>
    </div>
  );
};

export default FeaturedProduct;
