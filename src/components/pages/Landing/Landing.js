import React from 'react';
import './landing.css';
import Top1 from '../Landing/Top1.jpg';
import Top2 from '../Landing/Top2.jpg';
import tittle_img from '../Landing/Top3.jpg';
import middle_img from '../Landing/middle_img.jpg';
import Top3 from '../Landing/Top4.jpg';
import logo from '../Landing/banner.png';

const Landing = () => {
  return (
    <div className="container">
      <h1 className="header">Antique and Vintage Furniture</h1>
      <div className="banner">
        <img src={logo} className="banner_img" />
      </div>
    </div>
  );
};

export default Landing;
