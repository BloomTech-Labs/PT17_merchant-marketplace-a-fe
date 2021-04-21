import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'antd';
import {
  SearchOutlined,
  HeartFilled,
  createFromIconfontCN,
  UserOutlined,
} from '@ant-design/icons';
import './mainNavBar.css';
import { useOktaAuth } from '@okta/okta-react';
import logo from '../mainNavBar/Merchant.png';
import { SearchInput } from './Style';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import BrowseProducts from '../../pages/BrowseProducts';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', //icon-shoppingcart
  ],
});

function MainNavBar() {
  const { authState, authService } = useOktaAuth();
  const [searchActive, SetSearchActive] = useState(false);
  const [searchTerm, SetSearchTerm] = useState([]);
  let history = useHistory();

  const search = e => {
    //  e.preventDefault();
    history.push({
      pathname: '/productSearch',
      // search: '?query=abc',
      state: { searchItem: searchTerm },
    });
  };
  const handleKeypress = e => {
    // it triggers by pressing enter key
    if (e.keyCode == 13) {
      search(e);
    }
  };

  return (
    <div className="nav-bar">
      <div className="title">
        <img className="logo_1" src={logo}></img>
      </div>
      <div className="navigation_links">
        <Link to="/" className="navigation_link">
          Home
        </Link>
        <Link to="/BrowseProducts" className="navigation_link">
          Browse
        </Link>
        <Link to="/" className="navigation_link">
          Shops
        </Link>
        <Link to="/" className="navigation_link">
          Contact Us
        </Link>
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
          onKeyDown={handleKeypress}
        />
      </div>
      <div className="nav_links">
        {authState.isAuthenticated && (
          <NavLink className="nav_link" to="/myprofile">
            <UserOutlined className="nav_icon stay" />
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <NavLink className="nav_link" to="/">
            <HeartFilled className="nav_icon stay" />
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <NavLink className="nav_link" to="/">
            <IconFont type="icon-shoppingcart" className="nav_icon stay" />
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <Button
            className="nav_icon button"
            onClick={() => authService.logout()}
          >
            Logout
          </Button>
        )}
        {!authState.isAuthenticated && (
          <Button onClick={() => authService.login()}>Login</Button>
        )}
      </div>
    </div>
  );
}

export default MainNavBar;
