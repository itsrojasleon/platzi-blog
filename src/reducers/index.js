import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  user: userReducer,
  post: postReducer,
  comment: commentReducer,
  todo: todoReducer,
});
