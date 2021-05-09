import React from 'react'
import "./Skeleton.css";
import SkeletonElement from './SkeletonElement';
import {connect} from "react-redux";
import Shimmer from './Shimmer';


function SkeletonTransactions(props) {
    const {theme} = props;
    const themeClass = theme || "light";
    return (
        <div className={`skeleton-wrapper-transaction ${themeClass}`}>
            <SkeletonElement type="title" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />

            <Shimmer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        theme:state.appTheme.theme
    }
}

export default connect(mapStateToProps)(SkeletonTransactions);
