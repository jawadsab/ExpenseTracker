import { SIGNUP_SUCCESS, SIGNIN_SUCCESS,AUTH_ERROR ,SIGNUP_FAIL} from './actionTypes';
import api from '../../_helper/api';

export const signupAction = (userDetails) => {
  return async function (dispatch) {
    try {
      console.log("SIGNUP AC",userDetails);
      const res = await api.post('/user/signup', userDetails);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
        console.log("SIGNUP ERROR",error.response.data.msg);
        dispatch({
          type:AUTH_ERROR,
          payload:error.response.data
        });
        dispatch({
          type:SIGNUP_FAIL
        })

        
      
    }
  };
};
