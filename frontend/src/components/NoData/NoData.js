import React from 'react';

import { NoDataWrapper} from './NoData.elements';



function NoData({children }) {
  return (
    <NoDataWrapper>
     
      {children}
    </NoDataWrapper>
  );
}



export default NoData;
