import axios from 'axios';
import { FETCH_USERS, FETCH_POSTS, FETCH_POST, LOADING, ERROR } from './types';

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
export function fetchPosts(id) {
  return async function(dispatch) {
    dispatch({ type: LOADING });
    try {
      // Sometimes I need posts by user
      // But also I need all of the posts
      const param = id ? `posts?userId=${id}` : 'posts';

      const { data } = await axios.get(`${BASE_URL}/${param}`);
      dispatch({ type: FETCH_POSTS, payload: data });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}

// export function fetchPost() {
//   return async function(dispatch) {
//     try {
//       const { data } = await axios.get(`${BASE_URL}/posts?userId=1`);

//       dispatch({ TYPE: FETCH_POST, paylaod: data });
//     } catch (error) {
//       console.log('Error');
//     }
//   };
// }
