import React from 'react';
import { AthletePreview } from './AthletePreview';

export const IndexPage = ({ athletes }) => (
  <div className="home">
    <div className="athletes-selector">
      {athletes.map(
        athleteData => <AthletePreview key={athleteData.id} {...athleteData} />,
      )}
    </div>
  </div>
);

export default IndexPage;
