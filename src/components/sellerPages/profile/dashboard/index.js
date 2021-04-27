import React from 'react';
import './dashboard.css';
import InvSection from './invSection';
import OrderSection from './orderSection';
import CustomerSection from './customerSection';
import { Card, Col, Row } from 'antd';
function Dashboard() {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Payments" bordered={false}>
            {' '}
            <InvSection />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Revenue" bordered={false}>
            {' '}
            <OrderSection />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Messages" bordered={false}>
            {' '}
            <CustomerSection />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
