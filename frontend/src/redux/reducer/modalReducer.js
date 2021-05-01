import {OPEN_MODAL,CLOSE_MODAL} from "../actions/actionTypes";


const initialState = {
    active:false
}

const modalReducer = (state=initialState,action) => {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                active:true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                active:false
            }
        default:
            return state;
    }
}

export default modalReducer;