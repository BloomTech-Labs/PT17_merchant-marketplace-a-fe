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
      .get(`${process.env.REACT_APP_API_URI}search`)
      .then(response =>
        setProducts(response.data.sort(() => 0.5 - Math.random()).slice(0, 12))
      );
  }, []);
  return (
    <div className="landing_container">
      <h1 className="header">Antique and Vintage Collection</h1>
      <div className="banner">
        <img
          alt="merchant marketplace logo"
          src={logo}
          className="banner_img"
        />
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
