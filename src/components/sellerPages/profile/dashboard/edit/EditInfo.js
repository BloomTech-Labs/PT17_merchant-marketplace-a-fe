import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMyInfo, editMyInfo } from '../../../../../state/actions';
import { useOktaAuth } from '@okta/okta-react';
import NavBar from '../../../../common/navBar';

function EditInfo(props) {
  const history = useHistory();
  const { authState } = useOktaAuth();
  const [sellerForm, setSellerForm] = useState({
    id: `${props.myInfo.id}`,
    seller_name: `${props.myInfo.seller_name}`,
    email_address: `${props.myInfo.email_address}`,
    phone_number: `${props.myInfo.phone_number}`,
    physical_address: `${props.myInfo.physical_address}`,
    description: `${props.myInfo.description}`,
  });

  useEffect(() => {
    props.fetchMyInfo(authState);
  }, []);

  function editForm(e) {
    console.log('sellerform', sellerForm);
    setSellerForm({
      ...sellerForm,
      [e.target.name]: e.target.value,
    });
  }

  function cancelEdit(e) {
    history.go(-1);
  }

  async function submitEdit(e) {
    await props.editMyInfo(authState, sellerForm);
    history.push('/myprofile/myinfo');
  }

  return (
    <div style={{ display: 'flex', height: '700px' }}>
      <NavBar />
      <div
        style={{
          position: 'absolute',
          margin: '150px 42% 0px',
          width: '330px',
          height: '550px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h4 style={{ borderBottom: '1px solid lightgrey' }}>Edit Profile</h4>
        <br />
        <br />
        <label>
          Name
          <br />
          <input
            name="seller_name"
            value={sellerForm.seller_name}
            onChange={editForm}
          ></input>
        </label>
        <br />
        <label>
          Address
          <br />
          <input
            name="physical_address"
            value={sellerForm.physical_address}
            onChange={editForm}
          ></input>
        </label>
        <br />
        <label>
          PhoneNumber
          <br />
          <input
            name="phone_number"
            value={sellerForm.phone_number}
            onChange={editForm}
          ></input>
        </label>
        <br />
        <label>
          Email
          <br />
          <input
            name="email_address"
            value={sellerForm.email_address}
            onChange={editForm}
          ></input>
        </label>
        <br />
        <label>
          Description
          <br />
          <input
            name="description"
            value={sellerForm.description}
            onChange={editForm}
          ></input>
        </label>
        <br />
        <button onClick={submitEdit}>submit</button>
        <button onClick={cancelEdit}>cancel</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state in editInfo', state.information.myInfo);
  return {
    myInfo: state.information.myInfo,
    loading: state.information.fetchMyInfoStatus,
  };
};

export default connect(mapStateToProps, { editMyInfo, fetchMyInfo })(EditInfo);
