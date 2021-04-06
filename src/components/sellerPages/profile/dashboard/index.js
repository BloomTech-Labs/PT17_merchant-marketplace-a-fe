import React from 'react';
import './dashboard.css';
import InvSection from './invSection';
import OrderSection from './orderSection';
import CustomerSection from './customerSection';
import Charts from '../charts/MyChart';
import {
  Jumbotron,
  Container,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
  Nav,
  Button,
  CardImg,
  Card,
} from 'reactstrap';

function Dashboard() {
  return (
    <div className="whole_page">
      <br></br>
      <br></br>
      <div>
        <h1 className="seller_dashboard" style={{ color: 'black' }}>
          Hello Seller!
        </h1>
      </div>

      <div className="dashboard">
        <div className="dashItem">
          <InvSection />
        </div>
        <div className="dashItem">
          <OrderSection />
        </div>
        <div className="dashItem">
          <CustomerSection />
        </div>
        {/* <div className="dashItem">
          <Charts/>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
