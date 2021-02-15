import { requestStatus } from '../types/index';
import {
  ADD_PRODUCT_CATEGORY_START,
  ADD_PRODUCT_CATEGORY_SUCCESS,
  ADD_PRODUCT_CATEGORY_ERROR,
} from '../actions/index';

const initialState = {
  newProductCategory: {},
  getAddProductCategoryStatus: requestStatus.ready,
};

const addProductCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CATEGORY_START:
      return { ...state, getAddProductCategoryStatus: requestStatus.loading };
    case ADD_PRODUCT_CATEGORY_SUCCESS:
      return {
        newProductCategory: action.payload,
        getAddProductCategoryStatus: requestStatus.loading,
      };
    case ADD_PRODUCT_CATEGORY_ERROR:
      return { ...state, getAddProductCategoryStatus: requestStatus.error };
    default:
      return state;
  }
};

export default addProductCategoryReducer;
