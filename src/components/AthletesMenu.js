import React from 'react';
import { Route, Link } from 'react-router-dom';

const AhtleteMenuLink = ({ id, to, label }) => (
  <Route path={`/athlete/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const AthletesMenu = ({ athletes }) => (
  <nav className="atheletes-menu">
    {
      athletes.map(athlete =>
        <AhtleteMenuLink key={athlete.id} id={athlete.id} to={`/athlete/${athlete.id}`} label={athlete.name} />,
      )
    }
  </nav>
);

export default AthletesMenu;
