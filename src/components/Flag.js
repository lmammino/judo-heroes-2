import React from 'react';

export const Flag = props => (
  <span className="flag">
    <img className="icon" title={props.name} src={`/img/${props.icon}`} alt={`${props.name}'s flag`} />
    {props.showName && <span className="name"> {props.name}</span>}
  </span>
);

export default Flag;
