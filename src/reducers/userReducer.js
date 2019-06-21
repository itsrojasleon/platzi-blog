import { FETCH_USERS, ERROR, LOADING } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  users: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
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
