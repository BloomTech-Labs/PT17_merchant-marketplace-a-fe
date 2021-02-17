import { requestStatus } from '../types/index';
import {
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
} from '../actions/index';

const initialState = {
  deletedProduct: {},
  getDeleteProductStatus: requestStatus.ready,
};

const deleteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_START:
      return { ...state, getDeleteProductStatus: requestStatus.loading };
    case DELETE_PRODUCT_SUCCESS:
      console.log(action.payload);
      return {
        deletedProduct: action.payload,
        getDeleteProductStatus: requestStatus.loading,
      };
    case DELETE_PRODUCT_ERROR:
      return { ...state, getDeleteProductStatus: requestStatus.error };
    default:
      return state;
  }
};

export default deleteProductReducer;
