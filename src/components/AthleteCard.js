import React from 'react';
import { Link } from 'react-router-dom';

export const AthleteCard = props => (
  <Link to={`/athlete/${props.id}`}>
    <div className="athlete-preview">
      <img src={`img/${props.image}`} alt={`${props.name}'s profile`} />
      <h2 className="name">{props.name}</h2>
      <span className="medals-count">
        <img src="/img/medal.png" alt="Medal icon" /> {props.medals.length}
      </span>
    </div>
  </Link>
);

export default AthleteCard;
