import { requestStatus } from '../types/index';
import {
  ADD_PROFILE_IMAGE_START,
  ADD_PROFILE_IMAGE_SUCCESS,
  ADD_PROFILE_IMAGE_ERROR,
} from '../actions/index';

const initialState = {
  newItemImage: {},
  getAddProfileImageStatus: requestStatus.ready,
};

const editProfileImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE_IMAGE_START:
      return { ...state, getAddProfileImageStatus: requestStatus.loading };
    case ADD_PROFILE_IMAGE_SUCCESS:
      return {
        newProfileImage: action.payload,
        getAddProfileImageStatus: requestStatus.loading,
      };
    case ADD_PROFILE_IMAGE_ERROR:
      return { ...state, getAddProfileImageStatus: requestStatus.error };
    default:
      return state;
  }
};

export default editProfileImageReducer;
