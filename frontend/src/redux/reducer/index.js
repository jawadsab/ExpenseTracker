import { combineReducers } from 'redux';
import authReduer from './authReducer';
import expenseReducer from "./expenseReducer";
import modalReducer from "./modalReducer";
import themeReducer from './themeReducer';

export default combineReducers({
  auth: authReduer,
  expense:expenseReducer,
  modal:modalReducer,
  appTheme:themeReducer
});
