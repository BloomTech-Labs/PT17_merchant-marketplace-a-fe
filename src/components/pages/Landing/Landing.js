import React from 'react';
import MainNavBar from '../../common/mainNavBar';
import './landing.css';
import BrowserBar from '../../common/browserBar';
import Top1 from '../Landing/Top1.jpg';
import Top2 from '../Landing/Top2.jpg';
import tittle_img from '../Landing/Top3.jpg';
import Top3 from '../Landing/Top4.jpg';
import logo from '../Landing/marketplace-logo.png';
const Landing = () => {
  return (
    <div className="container">
      <MainNavBar />

      <div>
        <img className="tittle_img" src={tittle_img}></img>
      </div>
      <h1 className="title-2">Top rate merchants</h1>
      <section className="top-rated">
        <div className="top-img">
          <img src={Top1}></img>
        </div>
        <div className="top-img">
          <img src={Top2}></img>
        </div>
        <div className="top-img">
          <img src={Top3}></img>
        </div>
      </section>
    </div>
  );
};

export default Landing;
