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
const { Header, Content, Sider } = Layout;

function NavBar({ searchVisible, data, setData }) {
  // const { authState, authService } = useOktaAuth();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Inventory</Menu.Item>
        <Menu.Item key="2">Orders</Menu.Item>
        <Menu.Item key="3">Payments</Menu.Item>
        <Menu.Item key="3">Personal Information</Menu.Item>
      </Menu> */}
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Inventory">
              <Menu.Item key="1">Main</Menu.Item>
              <Menu.Item key="2">Published</Menu.Item>
              <Menu.Item key="3">Drafts</Menu.Item>
              <Menu.Item key="4">Archives</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Orders">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Payments"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Personal Information"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Dashboard />
          </Content>
        </Layout>
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
