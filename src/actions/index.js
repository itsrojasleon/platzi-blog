import axios from 'axios';
import { FETCH_USERS, LOADING, ERROR } from './types';

export function fetchUsers() {
  return async function(dispatch) {
    dispatch({ type: LOADING });
    try {
      const { data } = await axios.get(
        'http://jsonplaceholder.typicode.com/users',
      );
      dispatch({
        type: FETCH_USERS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
}
