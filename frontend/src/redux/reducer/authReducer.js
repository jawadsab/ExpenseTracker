import {SIGNUP_SUCCESS,SIGNIN_SUCCESS,AUTH_ERROR,SIGNUP_FAIL} from "../actions/actionTypes";

const initialState = {
    loading:true,
    token:localStorage.getItem("token"),
    user:null,
    error:"",
    success:false,
    isAuthenticated:false
}

const authReducer = (state=initialState,action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading:false,
                success:true,
                error:""
            }
        case SIGNIN_SUCCESS:
            localStorage.setItem("token",action.payload.token);
            return {
                ...state,
                ...action.payload,
                loading:false,
                isAuthenticated:true,
                success:true
            }
        case AUTH_ERROR:
            return {
                ...state,
                loading:false,
                success:false,
                error:action.payload.msg
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                loading:false,
                success:false
            }
        default:
            return state;
    }
}

export default authReducer;

