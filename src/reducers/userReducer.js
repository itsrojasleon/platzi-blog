import { FETCH_USERS, ERROR_USERS, LOADING_USERS } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  users: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING_USERS:
      return {
        ...state,
        loading: true,
      };
    case ERROR_USERS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_USERS:
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
}
