import { FETCH_POSTS, LOADING_POSTS, ERROR_POSTS } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
  ids: [],
};

export default function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log(action.payload);
      const validate = action.payload[0].userId;
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        ids: [...state.ids, validate],
      };
    case LOADING_POSTS:
      return {
        ...state,
        loading: true,
      };
    case ERROR_POSTS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
