import React, { useState, useEffect, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge } from 'antd';
import {
  SearchOutlined,
  HeartFilled,
  createFromIconfontCN,
  UserOutlined,
} from '@ant-design/icons';
import { Button } from '../../common';
import './mainNavBar.css';
import { useOktaAuth } from '@okta/okta-react';
import BrowserBar from '../../common/browserBar';
import logo from '../mainNavBar/Merchant.png';
import { SearchInput } from './Style';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', //icon-shoppingcart
  ],
});

function MainNavBar() {
  const { authState, authService } = useOktaAuth();
  const [searchActive, SetSearchActive] = useState(false);
  const [searchTerm, SetSearchTerm] = useState([]);

  const search = e => {
    e.preventDefault();
  };

  return (
    <div className="nav-bar">
      <div className="title">
        <img className="logo_1" src={logo}></img>
      </div>
      <div className="browse-bar">
        {''}
        <BrowserBar />
      </div>
      <div className="search">
        <SearchOutlined
          className="search_icon"
          onClick={() => SetSearchActive(searchActive => !searchActive)}
        />
        <SearchInput
          className="searchInput"
          value={searchTerm}
          onChange={({ target }) => SetSearchTerm(target.value)}
          placeholder="Search"
          active={searchActive}
          // onSubmit={search}
        />
      </div>
      <div className="nav_links">
        {authState.isAuthenticated && (
          <NavLink
            className="nav_link"
            activeStyle={{ color: 'white' }}
            to="/myprofile"
          >
            <UserOutlined className="nav_icon stay" />
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <NavLink
            className="nav_link"
            activeStyle={{ color: 'white' }}
            to="/myprofile"
          >
            <HeartFilled className="nav_icon stay" />
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <NavLink
            className="nav_link"
            activeStyle={{ color: 'white' }}
            to="/myprofile"
          >
            <IconFont type="icon-shoppingcart" className="nav_icon stay" />
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <Button
            className="nav_icon"
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
