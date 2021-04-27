import React from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import './BrowseProducts.css';
const { Meta } = Card;

const BrowseProducts = () => {
  const [productResult, setProductResult] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/search`).then(response => {
      setProductResult(response.data);
    });
  }, []);
  return productResult.length >= 1 ? (
    <div className="browseResult_container">
      {productResult.map(product => (
        <div className="browseResult" key={product.id}>
          {
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={product.images[0]} />}
            >
              <Meta
                title={product.item_name}
                description={product.description}
              />
            </Card>
          }
        </div>
      ))}
    </div>
  ) : (
    <h2>NOt found</h2>
  );
};
export default BrowseProducts;
