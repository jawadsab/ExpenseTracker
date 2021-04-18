import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  AUTH_ERROR,
  SIGNUP_FAIL,
  SIGNIN_FAIL,
  USER_LOADED,
  USER_LOAD_FAIL
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  token: localStorage.getItem('token'),
  user: null,
  error: '',
  success: false,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: '',
      };
    case SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        isAuthenticated: true,
        success: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.msg,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case USER_LOADED:
      return {
        ...state,
        loading:false,
        isAuthenticated:true,
        user:action.payload.user
      }
    case USER_LOAD_FAIL:
      return {
        ...state,
        loading:false,
        isAuthenticated:false,
        success:false
      }
    default:
      return state;
  }
};

export default authReducer;
