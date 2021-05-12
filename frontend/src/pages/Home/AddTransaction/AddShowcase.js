import React from 'react'
import addgif from "../../../assets/add_trans.gif"
import { Wrapper,ContentWrapper,ContentTitle,AddGif,Span } from './Showcase.elements'


function AddShowcase() {
    return (
        <Wrapper id="more">
            <ContentWrapper>
                <ContentTitle>1. You Can <Span>Add</Span> Transactions</ContentTitle>
                <AddGif src={addgif} alt="..."/>
            </ContentWrapper>
        </Wrapper>
    )
}

export default AddShowcase
