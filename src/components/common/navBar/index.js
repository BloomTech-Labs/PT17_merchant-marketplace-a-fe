import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import './navStyles.css';
import React from 'react';
import { UserOutlined, NotificationOutlined } from '@ant-design/icons';
import Dashboard from '../../sellerPages/profile/dashboard';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function NavBar() {
  return (
    <Layout>
      <Header
        className="header"
        style={{ background: 'rgb(44, 140, 172)' }}
      ></Header>
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
              style={{ color: 'black', marginTop: 50 }}
            >
              <Menu.Item key="1">
                Published <Link path to="/myprofile/inventory"></Link>
              </Menu.Item>

              <Menu.Item key="3">Drafts</Menu.Item>
              <Menu.Item key="4">Archives</Menu.Item>
            </SubMenu>

            <SubMenu
              style={{ color: 'black' }}
              key="sub3"
              icon={<NotificationOutlined />}
              title="Personal Information"
            >
              <Menu.Item key="9">
                View <Link path to="/myprofile/myinfo"></Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        {window.location.pathname === '/myprofile/myinfo' ||
        window.location.pathname === '/myprofile/editinfo' ||
        window.location.pathname === '/myprofile/inventory/additem' ? null : (
          <Layout style={{ padding: '0 24px 24px', color: 'white' }}>
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
        )}
      </Layout>
    </Layout>
  );
}

export default NavBar;
