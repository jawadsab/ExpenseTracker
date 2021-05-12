import React from 'react'
import realtimegif from "../../../assets/reatime.gif"
import { Wrapper,ContentWrapper,ContentTitle,AddGif,Span } from './RealTime.elements'


function RealTime() {
    return (
        <Wrapper>
            <ContentWrapper>
                <ContentTitle>3. Analyze Your Expenses Through<br /> <Span>Realtime Charts.</Span></ContentTitle>
                <AddGif src={realtimegif} alt="..."/>
            </ContentWrapper>
        </Wrapper>
    )
}

export default RealTime;