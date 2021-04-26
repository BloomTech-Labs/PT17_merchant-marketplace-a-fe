import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../../common/navBar';
import { connect } from 'react-redux';
import {
  fetchMyInfo,
  editMyInfo,
  addProfileImage,
} from '../../../../../state/actions';
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
import uploadcare from 'uploadcare-widget';

function MyInfo(props) {
  const history = useHistory();
  const { authState } = useOktaAuth();
  const [photos, setPhotos] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.fetchMyInfo(authState);
  }, []);

  function clicked(event) {
    history.push('/myprofile/editinfo');
  }

  function openUploadDialog(e) {
    let dialog = uploadcare.openDialog(null, {
      publicKey: '7f074009b333b2d5be63',
      imagesOnly: true,
    });
    dialog.done(function(file, fileGroup, list) {
      setLoading(true);
      file.promise().done(function(fileInfo) {
        setLoading(false);
        props.addProfileImage(authState, props.myInfo.id, fileInfo.originalUrl);
        console.log('fileinfo: ', fileInfo);
      });
    });
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
            {props.myInfo.avatarUrl ? (
              <Avatar size={64} src={props.myInfo.avatarUrl} />
            ) : (
              <Avatar size={64} icon={<UserOutlined />} />
            )}
          </div>

          <div>
            <br></br>
            <button
              class="upload-button"
              onClick={openUploadDialog}
              style={{ border: '1px solid black', borderRadius: '5px' }}
            >
              Edit Image
            </button>
          </div>
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
                {props.myInfo.name}
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">
                {props.myInfo.phone_number}
              </Descriptions.Item>
              <Descriptions.Item label="Town">
                Hangzhou, Zhejiang
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {props.myInfo.email}
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

export default connect(mapStateToProps, {
  fetchMyInfo,
  editMyInfo,
  addProfileImage,
})(MyInfo);
