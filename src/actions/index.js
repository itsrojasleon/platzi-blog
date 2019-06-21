import { FETCH_USERS } from './types';

export function fetchUsers() {
  return dispatch => {
    dispatch({
      type: FETCH_USERS,
      payload: [1, 2, 3],
    });
  };
}
