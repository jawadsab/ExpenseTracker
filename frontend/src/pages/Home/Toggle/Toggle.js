import React from 'react'
import toggle from "../../../assets/toggle.gif"
import { Wrapper,ContentWrapper,ContentTitle,AddGif,Span,Dark } from './Toggle.elements'


function Toggle() {
    return (
        <Wrapper>
            <ContentWrapper>
                <ContentTitle>4. Switch between <Span>Light</Span> and <Dark>Dark</Dark><br /> mode</ContentTitle>
                <AddGif src={toggle} alt="..."/>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Toggle;