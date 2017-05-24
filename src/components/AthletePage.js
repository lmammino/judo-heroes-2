import React from 'react';
import { Link } from 'react-router-dom';
import { AthletesMenu } from './AthletesMenu';
import { Medal } from './Medal';
import { Flag } from './Flag';

export const AthletePage = ({ athlete, athletes }) => {
  const headerStyle = { backgroundImage: `url(/img/${athlete.cover})` };
  return (
    <div className="athlete-full">
      <AthletesMenu athletes={athletes} />
      <div className="athlete">
        <header style={headerStyle} />
        <div className="picture-container">
          <img alt={`${athlete.name}'s profile`} src={`/img/${athlete.image}`} />
          <h2 className="name">{athlete.name}</h2>
        </div>
        <section className="description">
          Olympic medalist from
          &nbsp;<strong><Flag {...athlete.country} showName="true" /></strong>,
          born in {athlete.birth}
          (Find out more on <a href={athlete.link}>Wikipedia</a>).
        </section>
        <section className="medals">
          <p>Winner of <strong>{athlete.medals.length}</strong> medals:</p>
          <ul>{
            athlete.medals.map(medal => <Medal key={medal.id} {...medal} />)
          }</ul>
        </section>
      </div>
      <div className="navigateBack">
        <Link to="/">« Back to the index</Link>
      </div>
    </div>
  );
};

export default AthletePage;
