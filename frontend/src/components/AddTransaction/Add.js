import React from 'react'
import {Wrapper,FloatingButton,AddIcon} from "./Add.elements"

import {connect} from "react-redux";
import {openModal,closeModal} from "../../redux/actions/modalAction";
function Add(props) {

    const {openModal} = props;
    return (
       <>
        <Wrapper>
            <FloatingButton>
                <AddIcon onClick={() => openModal()}/>
            </FloatingButton>
        </Wrapper>
       </>
    )
}

const mapStateToProps = state => {
    return {
        modalActive:state.modal.active
    }
}

export default connect(mapStateToProps,{openModal,closeModal})(Add);
