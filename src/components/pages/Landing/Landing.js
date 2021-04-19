import React, { useState, useEffect } from 'react';
import './landing.css';
import FeaturedProduct from './FeaturedProduct';
// import {getExampleData} from '../../../api'; //will be replaced with api
import logo from '../Landing/banner.png';
import axios from 'axios';

const Landing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://my.api.mockaroo.com/pt17.json?key=d9048e30`)
      .then(response => setProducts(response.data));
  }, []);
  console.log(products);
  return (
    <div className="container">
      <h1 className="header">Antique and Vintage Collection</h1>
      <div className="banner">
        <img src={logo} className="banner_img" />
      </div>
      <div className="featured_container">
        <h1 className="title">Featured Listings</h1>
        <div className="feature_grid">
          {products.map(item => {
            return <FeaturedProduct item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Landing;
