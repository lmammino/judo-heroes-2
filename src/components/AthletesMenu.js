'use strict';

import React from 'react';
import { Link } from 'react-router';
import athletes from '../data/athletes';

const AthletesMenu = (props) => (
  <nav className="atheletes-menu">
    {athletes.map(athlete => {
      return <Link key={athlete.id} to={`/athlete/${athlete.id}`} activeClassName="active">
        {athlete.name}
      </Link>;
    })}
  </nav>
);

export default AthletesMenu;
