import React from 'react'
import { Wrapper,Text,Span,MailIcon,Heart} from './Feature.elements'


function Feature() {
    return (
        <Wrapper>
           
            <Text><Span href="mailto:jawadsab.v@gmail.com?subject=BUG REPORT">Mail me<MailIcon /></Span> to report any bug <Heart /></Text>
        </Wrapper>
    )
}

export default Feature
