import { combineReducers } from 'redux';
import authReduer from './authReducer';

export default combineReducers({
  auth: authReduer,
});
