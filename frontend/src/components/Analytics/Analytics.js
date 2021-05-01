import React from 'react'
import {Wrapper,IncomeChart,ChartWrapper,Title} from "./Analytics.elements";

import {connect} from "react-redux";
import useTransactions from "../../useTransactions";

function Analytics(props) {

    const {transactions} = props;

    const {chartIncomeData,chartExpenseData} = useTransactions(transactions);
    return (
       <>
        <Wrapper>
           <Title>My Income</Title>
            <ChartWrapper>
                <IncomeChart responsive data={chartIncomeData}/>
            </ChartWrapper>
            <Title>My Expenses</Title>
            <ChartWrapper>
                <IncomeChart responsive data={chartExpenseData}/>
            </ChartWrapper>
           
        </Wrapper>
       </>
    )
}

const mapStateToProps = state => {
    return {
        transactions:state.expense.transactions
    }
}

export default connect(mapStateToProps)(Analytics);
