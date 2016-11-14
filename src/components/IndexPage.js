'use strict';

import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

const IndexPage = (props) => (
  <div className="home">
    <div className="athletes-selector">
      {athletes.map(
        athleteData => <AthletePreview key={athleteData.id} {...athleteData} />
      )}
    </div>
  </div>
);

export default IndexPage;
