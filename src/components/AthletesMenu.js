import React from 'react';
import { Link } from 'react-router-dom';

const AthletesMenu = ({athletes}) => (
  <nav className="atheletes-menu">
    {athletes.map(athlete => {
      return <Link key={athlete.id} to={`/athlete/${athlete.id}`} activeClassName="active">
        {athlete.name}
      </Link>;
    })}
  </nav>
);

export default AthletesMenu;
