import React from 'react';
import { Skeleton } from 'antd';
import './itemCardStyles.css';
function LoadingProductCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img">
        <Skeleton.Image active />
      </div>

      <Skeleton active paragraph={{ rows: 4 }} />
    </div>
  );
}
export default LoadingProductCard;
