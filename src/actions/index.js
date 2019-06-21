import axios from 'axios';
import { FETCH_USERS } from './types';

export function fetchUsers() {
  return async function(dispatch) {
    try {
      const { data } = await axios.get(
        'http://jsonplaceholder.typicode.com/users',
      );
      dispatch({
        type: FETCH_USERS,
        payload: data,
      });
    } catch (error) {
      throw new Error('Something went wrong!');
    }
  };
}
