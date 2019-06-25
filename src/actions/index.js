import axios from 'axios';
import {
  FETCH_USERS,
  LOADING_USERS,
  ERROR_USERS,
  FETCH_POSTS,
  LOADING_POSTS,
  ERROR_POSTS,
} from './types';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

// Actions for users
export function fetchUsers() {
  return async function(dispatch) {
    dispatch({ type: LOADING_USERS });
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);
      dispatch({
        type: FETCH_USERS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: ERROR_USERS, payload: error.message });
    }
  };
}

// Actions for publications
export function fetchPosts(id) {
  return async function(dispatch) {
    dispatch({ type: LOADING_POSTS });
    try {
      // Sometimes I need posts by user
      // But also I need all of the posts
      const param = id ? `posts?userId=${id}` : 'posts';

      const { data } = await axios.get(`${BASE_URL}/${param}`);
      dispatch({ type: FETCH_POSTS, payload: data });
    } catch (error) {
      dispatch({
        type: ERROR_POSTS,
        payload: error.message,
      });
    }
  };
}
