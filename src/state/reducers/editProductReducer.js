import { requestStatus } from '../types/index';
import {
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from '../actions/index';

const initialState = {
  editedProduct: {},
  getEditProductStatus: requestStatus.ready,
};

const editProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT_START:
      return { ...state, getEditProductStatus: requestStatus.loading };
    case EDIT_PRODUCT_SUCCESS:
      return {
        editedProduct: action.payload,
        getEditProductStatus: requestStatus.loading,
      };
    case EDIT_PRODUCT_ERROR:
      return { ...state, getEditProductStatus: requestStatus.error };
    default:
      return state;
  }
};

export default editProductReducer;
