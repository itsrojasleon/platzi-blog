import {
  FETCH_COMMENTS,
  LOADING_COMMENTS,
  ERROR_COMMENTS,
} from '../actions/types';

const INITIAL_STATE = {
  comments: [],
  loading: false,
  error: '',
};

export default function commentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };
    case LOADING_COMMENTS:
      return {
        ...state,
        loading: true,
      };
    case ERROR_COMMENTS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
