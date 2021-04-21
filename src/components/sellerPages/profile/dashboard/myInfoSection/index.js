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
      <div style={{ display: 'flex' }}>
        <NavBar />
        <div style={{ marginLeft: '50px' }}>
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
            <Avatar size={64} icon={<UserOutlined />} />
          </div>

          <div>
            {/* <img
              class="profile-pic"
              src="http://cdn.cutestpaw.com/wp-content/uploads/2012/07/l-Wittle-puppy-yawning.jpg"
            /> */}
            <br></br>
            <div class="upload-button">Upload Profile Image</div>
            <input class="file-upload" type="file" accept="image/*" />
          </div>
          {/* <NavBar /> */}
          <br />
          <br />

          <Layout>
            <EditOutlined
              onClick={clicked}
              style={{ textAlign: 'right', marginRight: 50, marginTop: 20 }}
            />
            <Descriptions
              title="My Info"
              layout="vertical"
              style={{ textAlign: 'top', marginLeft: 50 }}
            >
              <Descriptions.Item label="Name:">
                {props.myInfo.seller_name}
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">
                {props.myInfo.phone_number}
              </Descriptions.Item>
              <Descriptions.Item label="Town">
                Hangzhou, Zhejiang
              </Descriptions.Item>
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
        </div>
      </div>
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
