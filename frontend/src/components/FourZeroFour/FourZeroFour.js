import React from 'react'
import fzf_light from "../../assets/fzf_light.svg";
import fzf_dark from "../../assets/fzf_dark.svg";
import { Wrapper,SVG,Info } from './404.element'

import {connect} from "react-redux"
import { Link } from 'react-router-dom';


function FourZeroFour({location,app_theme}) {
    return (
        <Wrapper>
             {app_theme === 'light' ? (
                <SVG src={fzf_light} alt="..." />
              ) : (
                <SVG src={fzf_dark} alt="..." />
              )}
              <Info>Page Not Found <Link to="/dashboard">Go Home</Link></Info>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        app_theme: state.appTheme.theme
    }
}

export default connect(mapStateToProps)(FourZeroFour);
