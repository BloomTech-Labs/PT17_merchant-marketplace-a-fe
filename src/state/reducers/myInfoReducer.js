import { requestStatus } from '../types/index';
import {
  FETCH_MY_INFO_START,
  FETCH_MY_INFO_SUCCESS,
  FETCH_MY_INFO_ERROR,
} from '../actions/index';

const initialState = {
  myInfo: {
    seller_name: '',
    physical_address: '',
    phone_number: '',
    email_address: '',
    description: '',
  },
  fetchMyInfoStatus: requestStatus.ready,
};
const myInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_INFO_START:
      return { ...state, fetchMyInfoStatus: requestStatus.loading };
    case FETCH_MY_INFO_SUCCESS:
      return {
        ...state,
        myInfo: action.payload,
        fetchMyInfoStatus: requestStatus.success,
      };
    case FETCH_MY_INFO_ERROR:
      return { ...state, fetchMyInfoStatus: requestStatus.error };

    default:
      return state;
  }
};

export default myInfoReducer;
