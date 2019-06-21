const INITIAL_STATE = {
  users: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
