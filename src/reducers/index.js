import { combineReducers } from 'redux';
import userReducers from './users';

const rootReducer = combineReducers({
  users: userReducers
});

export default rootReducer;
