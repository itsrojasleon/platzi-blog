import axios from 'axios';
import {
  FETCH_USERS,
  LOADING_USERS,
  ERROR_USERS,
  FETCH_POSTS,
  LOADING_POSTS,
  ERROR_POSTS,
  FETCH_COMMENTS,
  LOADING_COMMENTS,
  ERROR_COMMENTS,
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
      // But also I need all of the posts (Probably not)
      // const param = id ? `posts?userId=${id}` : 'posts';
      // But, right now I don't need it.

      const { data } = await axios.get(`${BASE_URL}/posts?userId=${id}`);
      dispatch({ type: FETCH_POSTS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_POSTS, payload: error.message });
    }
  };
}

// Actions for comments
export function fetchComments(id) {
  return async function(dispatch) {
    dispatch({ type: LOADING_COMMENTS });

    try {
      const { data } = await axios.get(`${BASE_URL}/comments?postId=${id}`);
      dispatch({ type: FETCH_COMMENTS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_COMMENTS, payload: error.message });
    }
  };
}
