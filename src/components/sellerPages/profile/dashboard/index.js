import React from 'react';
import './dashboard.css';
import InvSection from './invSection';
import OrderSection from './orderSection';
import CustomerSection from './customerSection';

function Dashboard() {
  return (
    <div className="dashboard">
      <img
        class="profile-pic"
        src="http://cdn.cutestpaw.com/wp-content/uploads/2012/07/l-Wittle-puppy-yawning.jpg"
      />
      <div class="upload-button">Upload Image</div>
      <input class="file-upload" type="file" accept="image/*" />

      <div className="dashItem">
        <InvSection />
      </div>
      <div className="dashItem">
        <OrderSection />
      </div>
      <div className="dashItem">
        <CustomerSection />
      </div>
    </div>
  );
}

export default Dashboard;
