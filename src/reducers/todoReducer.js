import { FETCH_TODOS, LOADING_TODOS, ERROR_TODOS } from '../actions/types';

const INITIAL_STATE = {
  todos: [],
  loading: false,
  error: '',
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
    default:
      return state;
  }
}
