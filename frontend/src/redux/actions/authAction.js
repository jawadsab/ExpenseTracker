import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  AUTH_ERROR,
  SIGNUP_FAIL,
  SIGNIN_FAIL,
  USER_LOADED,
  USER_LOAD_FAIL,
  LOGOUT
} from './actionTypes';
import api from '../../_helper/api';
import setAuthToken from "../../_helper/setAuthToken"

export const signupAction = (userDetails) => {
  return async function (dispatch) {
    try {
      const res = await api.post('/user/signup', userDetails);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data,
      });
      dispatch({
        type: SIGNUP_FAIL,
      });
    }
  };
};

export const signinAction = (userDetails) => {
  return async function (dispatch) {
    try {
      const res = await api.post('/user/signin', userDetails);
      console.log("SIGNIN ",res.data)
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type:USER_LOADED,
        payload:res.data.user
      })
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data });
      dispatch({ type: SIGNIN_FAIL });
    }
  };
};

export const loadUser = () => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    console.log({token});
    if(localStorage.token) {
      setAuthToken(localStorage.token)
      console.log({"TOKEN":localStorage.token})
    }
    try {
      const res = await api.get('/user');
      console.log("USER LOOADD",res.data);
      dispatch({
        type: USER_LOADED,
        payload: res.data.user,
      });
    } catch (error) {

    
      dispatch({
        type: USER_LOAD_FAIL,
      });
    }
  };
};

export const logout = () => ({type:LOGOUT})
