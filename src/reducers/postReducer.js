import { FETCH_POSTS, LOADING, ERROR } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
};

export default function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
