import React from 'react';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { Card } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { getProductsData } from '../../../api';
//This component is to display results of products

const { Meta } = Card;

const ProductSearch = () => {
  const location = useLocation();
  const term = location.state.detail;
  const { authState, authService } = useOktaAuth();
  const [productResult, setProductResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState(term);
  //backend
  useEffect(() => {
    getProductsData(authState)
      .then(response => {
        setProductResult(response.data);
        console.log(response, 'resp');
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return productResult.length >= 1 ? (
    <div className="productResult">
      {productResult
        .filter(productResult =>
          productResult.item_name.toLowerCase().includes(searchTerm)
        )
        .map(product => (
          <div key={product.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        ))}
    </div>
  ) : (
    <h2>Product Not Found</h2>
  );
};
export default ProductSearch;
