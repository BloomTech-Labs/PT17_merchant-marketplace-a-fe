import React from 'react';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'antd';
import NotFound from '../NotFound';
import { Card } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { getProductsData, search } from '../../../api';
import './ProductSearch.css';
const { Meta } = Card;

const ProductSearch = () => {
  const location = useLocation();
  const term = location.state.searchItem;
  const { authState, authService } = useOktaAuth();
  const [productResult, setProductResult] = useState([]);
  const [zipcode, setzipcode] = useState('10001');

  useEffect(() => {
    axios
      .get(`http://localhost:8000/search/?title=${term}&zip=${zipcode}`)
      .then(response => {
        setProductResult(response.data);

        console.log(response.data, 'Useeffect');
      });
  }, [term]);
  return productResult.length >= 1 ? (
    <div className="productResult_container">
      {productResult.map(product => (
        <div className="productResult" key={product.id}>
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
export default ProductSearch;
