import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../../common/navBar';
import { connect } from 'react-redux';
import { fetchMyInfo, editMyInfo } from '../../../../../state/actions';
import { useOktaAuth } from '@okta/okta-react';
import {
  Menu,
  Dropdown,
  Button,
  Space,
  Badge,
  Breadcrumb,
  Layout,
  Avatar,
  Descriptions,
  Upload,
} from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import Uploader from './Uploader';

function MyInfo(props) {
  const history = useHistory();
  const { authState } = useOktaAuth();

  useEffect(() => {
    props.fetchMyInfo(authState);
  }, []);

  function clicked(event) {
    history.push('/myprofile/editinfo');
  }

  return (
    <>
      <Layout
        style={{
          padding: '0 24px 24px',
          color: 'white',
          background: 'rgb(44, 140, 172)',
        }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/myprofile">Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </Layout>
      <div>
        <br></br>
        <br></br>
        <Uploader>
          <img
            id="logo"
            src="https://res.cloudinary.com/yoav-cloud/image/upload/v1587564735/rpldy/logo/react-uploady-text-logo-light.png"
          />
        </Uploader>
        {/* <Avatar size={64} icon={<UserOutlined />} /> */}
      </div>

      <div>
        {/* <img
          class="profile-pic"
          src="http://cdn.cutestpaw.com/wp-content/uploads/2012/07/l-Wittle-puppy-yawning.jpg"
        /> */}
        <br></br>
        {/* <div class="upload-button">Upload Profile Image</div>
        <input class="file-upload" type="file" accept="image/*" /> */}
      </div>
      {/* <NavBar /> */}
      <br />
      <br />

      <Layout>
        <EditOutlined
          onClick={clicked}
          style={{ textAlign: 'right', margin: 10 }}
        />
        <Descriptions
          title="My Info"
          layout="vertical"
          style={{ textAlign: 'top', marginLeft: 20 }}
        >
          <Descriptions.Item label="Name:">
            {props.myInfo.seller_name}
          </Descriptions.Item>
          <Descriptions.Item label="Telephone">
            {props.myInfo.phone_number}
          </Descriptions.Item>
          <Descriptions.Item label="Town">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Email">
            {props.myInfo.email_address}
          </Descriptions.Item>
          <Descriptions.Item label="Address" span={2}>
            {props.myInfo.physical_address}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {props.myInfo.description}
          </Descriptions.Item>
        </Descriptions>
      </Layout>

      {/* <div>
        <h3>Name:{props.myInfo.seller_name}</h3>
        <h3>Address:{props.myInfo.physical_address}</h3>
        <h3>Phone Number:{props.myInfo.phone_number}</h3>
        <h3>Email:{props.myInfo.email_address}</h3>
        <h3>Description:{props.myInfo.description}</h3>
      </div> */}

      {/* <button onClick={clicked}>Edit</button> */}
    </>
  );
}

const mapStateToProps = state => {
  return {
    myInfo: state.information.myInfo,
    loading: state.information.fetchMyInfoStatus,
  };
};

export default connect(mapStateToProps, { fetchMyInfo, editMyInfo })(MyInfo);
