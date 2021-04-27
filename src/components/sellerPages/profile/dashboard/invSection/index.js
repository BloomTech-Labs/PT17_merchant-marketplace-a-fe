import React from 'react';
import { Link } from 'react-router-dom';

function InvSection() {
  return (
    <>
      <h4>$9,000</h4>
      <Link path to="/payments">
        <button type="button" class="btn btn-primary  float-right">
          View Payments
        </button>
      </Link>
    </>
  );
}
export default InvSection;
