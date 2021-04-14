//import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown, Button, Space, Badge, Breadcrumb, Layout } from 'antd';
//import { Button } from '../../common';
import './navStyles.css';
import SearchBar from '../searchbar';
import { useOktaAuth } from '@okta/okta-react';
import logo from '../inventory-logo.png';
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import Dashboard from '../../sellerPages/profile/dashboard';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

function NavBar({ searchVisible, data, setData }) {
  // const { authState, authService } = useOktaAuth();
  return (
    <Layout>
      <Header className="header" style={{ background: 'rgb(44, 140, 172)' }}>
        <div className="logo">
          {/* <div className="tittle">
        <img className="logo_1" src={logo}></img>
        <div className="project-tittle">MERCHANT MARKETPLACE</div>
      </div> */}
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title="Inventory"
              style={{ color: 'rgb(44, 140, 172)' }}
            >
              <Menu.Item key="1">
                Main <Link path to="/myprofile/inventory"></Link>
              </Menu.Item>

              <Menu.Item key="2">Published </Menu.Item>
              <Menu.Item key="3">Drafts</Menu.Item>
              <Menu.Item key="4">Archives</Menu.Item>
            </SubMenu>

            <SubMenu
              style={{ color: 'rgb(44, 140, 172)' }}
              key="sub3"
              icon={<NotificationOutlined />}
              title="Personal Information"
            >
              <Menu.Item key="9">
                View <Link path to="/myprofile/myinfo"></Link>
              </Menu.Item>
              {/* <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item> */}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px', color: 'white' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/myprofile">Dashboard</Breadcrumb.Item>

            {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 300,
            }}
          >
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
      <Layout>
        <Footer style={{ textAlign: 'center' }}>
          ​
          <div className="legal">
            <p>
              &copy;{new Date().getFullYear()} MERCHANT MARKETPLACE | All rights
              reserved | Terms Of Service | Privacy
            </p>
          </div>
        </Footer>
      </Layout>
    </Layout>

    // <div className="nav-container" style={{ color: 'Black' }}>
    //   <div className="nav">
    //     <div
    //       className="logo"
    //       style={{
    //         background:"white"
    //       }}
    //     >
    //       <NavLink to="/" activeStyle={{ color: 'white' }}>
    //         <span style={{ color: 'Black' }}>MERCHANT  MARKETPLACE</span>
    //       </NavLink>
    //     </div>

    //     <li class="nav-item dropdown" style={{ color: 'Black' }}>
    //     {/* <Link to="/myprofile/inventory"> */}
    //     <a class="nav-link dropdown-toggle" href="/myprofile/inventory" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'Black' }}>
    //       Inventory
    //     </a>
    //     {/* </Link> */}
    //     <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //       <a class="dropdown-item" href="/myprofile/inventory">Main</a>
    //       <a class="dropdown-item" href="#">Publised</a>
    //       <a class="dropdown-item" href="#" onClick={unPublishedChange}>Drafts</a>
    //       {/* <Button onClick={unPublishedChange}>Drafts</Button> */}
    //       <a class="dropdown-item" href="#">Archives</a>
    //     </div>
    //   </li>
    //     {/* Inventory</Link> */}

    //     <Link style={{ color: 'Black' }}>Orders</Link>
    //     <Link style={{ color: 'Black' }}>Payment</Link>
    //     <Link to="/myprofile/myinfo" style={{ color: 'Black' }}>Personal Information</Link>
    //     <Link to="/myprofile" style={{ color: 'Black' }}>Dashboard</Link>
    //     <Link>

    //     <a href="#" >
    //       <span class="glyphicon glyphicon-envelope"></span>

    //     </a>
    //     </Link>
    //   </div>
    //   <SearchBar searchVisible={searchVisible} setData={setData} data={data} />

    // </div>
  );
  // function unPublishedChange() {
  //   setData('$#&unpublished');
  // }
}

export default NavBar;
