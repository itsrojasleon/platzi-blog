import axios from 'axios';
import { FETCH_USERS, FETCH_POSTS, LOADING, ERROR } from './types';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

// Actions for users
export function fetchUsers() {
  return async function(dispatch) {
    dispatch({ type: LOADING });
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);
      dispatch({
        type: FETCH_USERS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
}

// Actions for publications
export function fetchPosts() {
  return async function(dispatch) {
    dispatch({ type: LOADING });
    try {
      const { data } = await axios.get(`${BASE_URL}/posts`);
      dispatch({ type: FETCH_POSTS, payload: data });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}
