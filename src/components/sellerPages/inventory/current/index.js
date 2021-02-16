import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
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

  const displayedData = useSearch(inventory, 'name', searchData);
  console.log('inventory', inventory);
  console.log('Redux state: ', state);
  return (
    <>
      <NavBar searchVisible={false} setData={setSearchData} />
      <div className="outerContainer">
        <div className="contents">
          <SearchResults data={displayedData} filter={searchData} />
          <Link to="/myprofile/inventory/additem">
            <Button>+Add Item</Button>
          </Link>
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
