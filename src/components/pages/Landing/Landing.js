import React, { useState, useEffect } from 'react';
import './landing.css';
import FeaturedProduct from './FeaturedProduct';
import { Link } from 'react-router-dom';
import logo from '../Landing/banner.png';
import selling from '../Landing/s-l960.webp';
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
  console.log(products);
  return (
    <div className="landing_container">
      <h1 className="header">Antique and Vintage Collection</h1>
      <div className="banner">
        <img src={logo} className="banner_img" />
      </div>

      <div className="selling">
        <div className="selling_text">
          <h1>
            Buy, sell, and discover antique and vintage, home decor, and more
          </h1>
          <p>
            Sign up now and join millions of people on the social marketplace
            for all things style
          </p>
          <Link to="/login">
            <button>Sign Up</button>
          </Link>
        </div>
        <img
          src={selling}
          className="selling_img"
          style={{ width: '1900px' }}
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
