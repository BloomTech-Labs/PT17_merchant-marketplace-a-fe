import { requestStatus } from '../types/index';
import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from '../actions/index';

const initialState = {
  categories: [],
  getCategoriesStatus: requestStatus.ready,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_START:
      return { ...state, getCategoriesStatus: requestStatus.loading };
    case FETCH_CATEGORIES_SUCCESS:
      const newState = action.payload;
      return {
        categories: newState,
        getCategoriesStatus: requestStatus.success,
      };
    case FETCH_CATEGORIES_ERROR:
      return { ...state, getCategoriesStatus: requestStatus.error };

    default:
      return state;
  }
};

export default categoriesReducer;
