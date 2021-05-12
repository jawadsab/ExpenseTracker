import React from 'react';
import {
  CashflowWrapper,
  CashflowCard,
  CardTitle,
  CardBody,
  Content,
  ContentTitle,
  Balance,
  Amount,
  RupeeIcon,
} from './CashFlow.elements';

import { numberWithCommas } from '../../_helper/format';
import SkeletonCashFlow from '../skeleton/SkeletonCashFlow';

import { connect } from 'react-redux';

function CashFlow(props) {
  const { loading } = props;
  return (
    <CashflowWrapper>
      {loading && <SkeletonCashFlow />}
      {!loading && (
        <CashflowCard>
          <CardTitle>CASH FLOW</CardTitle>
          <CardBody>
            <Content>
              <ContentTitle>Income:</ContentTitle>
              <Amount>
                <RupeeIcon /> {numberWithCommas(props.income)}
              </Amount>
              <ContentTitle>Spent:</ContentTitle>
              <Amount>
                <RupeeIcon /> {numberWithCommas(props.spent)}
              </Amount>
            </Content>
            <Balance>
              <ContentTitle>Balance:</ContentTitle>
              <Amount>
                <RupeeIcon /> {numberWithCommas(props.availableBalance)}
              </Amount>
            </Balance>
          </CardBody>
        </CashflowCard>
      )}
    </CashflowWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.expense.loading,
  };
};

export default connect(mapStateToProps)(CashFlow);
