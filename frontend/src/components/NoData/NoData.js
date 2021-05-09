import React from 'react';
import nodatasvglight from '../../assets/no_data_light.svg';
import nodatasvgdark from '../../assets/no_data_dark.svg';
import { NoDataWrapper, Information, AddIcon, SVG } from './NoData.elements';

import { connect } from 'react-redux';

function NoData({ app_theme }) {
  return (
    <NoDataWrapper>
      {app_theme === 'light' ? (
        <SVG src={nodatasvglight} alt="..." />
      ) : (
        <SVG src={nodatasvgdark} />
      )}

      <Information>
        Oops! We don't have anything to show. Press the <AddIcon /> icon below
        to add transaction.
      </Information>
    </NoDataWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    app_theme: state.appTheme.theme,
  };
};

export default connect(mapStateToProps)(NoData);
