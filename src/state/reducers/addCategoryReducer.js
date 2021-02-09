import { requestStatus } from '../types/index';
import {
  ADD_CATEGORY_START,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_ERROR,
} from '../actions/index';

const initialState = {
  newCategory: {},
  getAddCategoryStatus: requestStatus.ready,
};

const addCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_START:
      return { ...state, getAddCategoryStatus: requestStatus.loading };
    case ADD_CATEGORY_SUCCESS:
      return {
        newCategory: action.payload,
        getAddCategoryStatus: requestStatus.loading,
      };
    case ADD_CATEGORY_ERROR:
      return { ...state, getAddCategoryStatus: requestStatus.error };
    default:
      return state;
  }
};

export default addCategoryReducer;
