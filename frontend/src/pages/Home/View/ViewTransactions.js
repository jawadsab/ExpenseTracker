import React from 'react'
import viewgif from "../../../assets/view.gif"
import { Wrapper,ContentWrapper,ContentTitle,AddGif,Span } from './View.elements'


function ViewTransactions() {
    return (
        <Wrapper>
            <ContentWrapper>
                <ContentTitle>2. <Span>View</Span> All Transactions<br /> At One Place</ContentTitle>
                <AddGif src={viewgif} alt="..."/>
            </ContentWrapper>
        </Wrapper>
    )
}

export default ViewTransactions;