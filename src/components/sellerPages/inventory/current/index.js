import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Layout } from 'antd';
import { connect } from 'react-redux';
import {
  fetchProducts,
  fetchCategories,
  fetchTags,
} from '../../../../state/actions';
import { Link } from 'react-router-dom';

import NavBar from '../../../common/navBar';
import SearchResults from './searchResults';
import useSearch from '../../../common/customHooks/useSearch';
import { Card, Col, Row } from 'antd';

function CurrentInventory({
  state,
  inventory,
  fetchProducts,
  fetchCategories,
  fetchTags,
  getProductsStatus,
  getCategoriesStatus,
  getTagsStatus,
}) {
  const [searchData, setSearchData] = useState({});
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
    fetchCategories(authState);
    fetchTags(authState);
  }, []);

  const displayedData = useSearch(inventory, 'item_name', searchData);

  return (
    <>
      <Layout
        style={{
          padding: '0 24px 24px',
          color: 'white',
          background: 'rgb(44, 140, 172)',
        }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/myprofile">Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </Layout>
      <Link to="/myprofile/inventory/additem">
        <Button>+Add Item</Button>
      </Link>
      {/* <NavBar searchVisible={false} setData={setSearchData} /> */}
      <div className="outerContainer">
        <div className="contents">
          <SearchResults data={displayedData} filter={searchData} />
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  state: state,
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
  getCategoriesStatus: state.categories.getCategoriesStatus,
  getTagsStatus: state.tags.getTagsStatus,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchCategories,
  fetchTags,
})(CurrentInventory);
