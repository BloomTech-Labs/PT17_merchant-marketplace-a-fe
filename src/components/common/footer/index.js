import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import apple from './app-store-logopng-low-emission-zone-brussels-app-store-png-4491_1552.png';
import google from './png-transparent-google-play-logo-google-play-android-app-store-play-now-button-text-label-logo.png';
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="grid_list">
          <div className="box_item">Shop</div>
          <Link to="/" className="box_item link">
            Browse
          </Link>
          <Link to="/" className="box_item link">
            Shops
          </Link>
        </div>
        <div className="grid_list">
          <div className="box_item">Sell</div>
          <Link to="/" className="box_item link">
            Sell on Merchant Marketplace
          </Link>
          <Link to="/" className="box_item link">
            Terms
          </Link>
          <Link to="/" className="box_item link">
            Forums
          </Link>
          <Link to="/" className="box_item link">
            Affiliates
          </Link>
        </div>
        <div className="grid_list">
          <div className="box_item">About</div>
          <Link to="/" className="box_item link">
            Merchant Marketplace, Inc.
          </Link>
          <Link to="/" className="box_item link">
            Policies
          </Link>
          <Link to="/" className="box_item link">
            Investors
          </Link>
          <Link to="/" className="box_item link">
            Careers
          </Link>
          <Link to="/" className="box_item link">
            Impact
          </Link>
        </div>
        <div className="grid_list">
          <div className="box_item">Help</div>
          <Link to="/" className="box_item link">
            Help Center
          </Link>
          <Link to="/" className="box_item link">
            Privacy Policy
          </Link>
          <Link to="/" className="box_item link">
            Terms of Service
          </Link>
          <div className="widgets">
            <img alt="apple" src={apple} className="apple" />
            <img alt="google" src={google} className="google" />
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2021 Merchant Marketplace, Inc. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
