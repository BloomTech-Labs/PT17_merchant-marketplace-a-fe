import { requestStatus } from '../types/index';
import {
  ADD_PRODUCT_TAG_START,
  ADD_PRODUCT_TAG_SUCCESS,
  ADD_PRODUCT_TAG_ERROR,
} from '../actions/index';

const initialState = {
  newProductTag: {},
  getAddProductTagStatus: requestStatus.ready,
};

const addProductTagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TAG_START:
      return { ...state, getAddProductTagStatus: requestStatus.loading };
    case ADD_PRODUCT_TAG_SUCCESS:
      return {
        newProductTag: action.payload,
        getAddProductTagStatus: requestStatus.loading,
      };
    case ADD_PRODUCT_TAG_ERROR:
      return { ...state, getAddProductTagStatus: requestStatus.error };
    default:
      return state;
  }
};

export default addProductTagReducer;
