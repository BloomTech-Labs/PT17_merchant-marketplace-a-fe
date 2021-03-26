import React from 'react';
import './dashboard.css';
import InvSection from './invSection';
import OrderSection from './orderSection';
import CustomerSection from './customerSection';
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
    <div>
      <div>
        <h1 className="seller_dashboard">Seller Dashboard</h1>
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
      </div>
    </div>
  );
}

export default Dashboard;
