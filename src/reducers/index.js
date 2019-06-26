import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  user: userReducer,
  post: postReducer,
  comment: commentReducer,
});
