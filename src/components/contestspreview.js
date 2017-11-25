import React from 'react';

const ContestsPreview = (contest) => (
  <div className="">
    <div>
      {contest.categoryName}
    </div>
    <div>
      {contest.contestName}
    </div>
  </div>
);

export default ContestsPreview;
