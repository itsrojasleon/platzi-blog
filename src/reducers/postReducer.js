import { FETCH_POSTS } from '../actions/types';

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: '',
};

export default function postReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
