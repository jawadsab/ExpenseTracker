import {OPEN_MODAL,CLOSE_MODAL} from "./actionTypes";


export const openModal = () => {
    return function(dispatch) {
        dispatch({
            type:OPEN_MODAL
        })
    }
}

export const closeModal = () => {
    return function(dispatch) {
        dispatch({
            type:CLOSE_MODAL
        })
    }
}