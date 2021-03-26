import React, { useState, useEffect, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge } from 'antd';
import { Button } from '../../common';
import './mainNavBar.css';
import { useOktaAuth } from '@okta/okta-react';
import BrowserBar from '../../common/browserBar';
import logo from '../mainNavBar/marketplace-logo.png';
function MainNavBar() {
  const { authState, authService } = useOktaAuth();

  return (
    <div className="nav-bar">
      {/* logo */}
      <div className="tittle">
        <img className="logo_1" src={logo}></img>
        <div>MERCHANT MARKET PLACE</div>
      </div>
      <div className="browse-bar">
        {''}
        <BrowserBar />
      </div>
      <div className="menu">
        {authState.isAuthenticated && (
          <NavLink
            className="link"
            activeStyle={{ color: 'white' }}
            to="/myprofile"
          >
            MY PROFILE
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <Button
            handleClick={() => authService.logout()}
            buttonText="LOGOUT"
          />
        )}
        {!authState.isAuthenticated && (
          <Button handleClick={() => authService.login()} buttonText="LOGIN" />
        )}
      </div>
    </div>
  );
}

export default MainNavBar;
