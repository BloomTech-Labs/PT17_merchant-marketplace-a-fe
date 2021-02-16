import { requestStatus } from '../types/index';
import {
  ADD_TAG_START,
  ADD_TAG_SUCCESS,
  ADD_TAG_ERROR,
} from '../actions/index';

const initialState = {
  newTag: {},
  getAddTagStatus: requestStatus.ready,
};

const addTagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAG_START:
      return { ...state, getAddTagStatus: requestStatus.loading };
    case ADD_TAG_SUCCESS:
      return {
        newTag: action.payload,
        getAddTagStatus: requestStatus.loading,
      };
    case ADD_TAG_ERROR:
      return { ...state, getAddTagStatus: requestStatus.error };
    default:
      return state;
  }
};

export default addTagReducer;
