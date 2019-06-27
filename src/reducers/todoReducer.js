import {
  FETCH_TODOS,
  LOADING_TODOS,
  ERROR_TODOS,
  UPDATE_USER_ID,
  UPDATE_TITLE,
} from '../actions/types';

const INITIAL_STATE = {
  todos: [],
  loading: false,
  error: '',
  userId: '',
  title: '',
};

export default function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: '',
      };
    case LOADING_TODOS:
      return {
        ...state,
        loading: true,
      };
    case ERROR_TODOS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
}
