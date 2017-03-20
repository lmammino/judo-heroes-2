import React from 'react';

const Flag = (props) => (
  <span className="flag">
    <img className="icon" title={props.name} src={`/img/${props.icon}`}/>
    {props.showName && <span className="name"> {props.name}</span>}
  </span>
);

export default Flag;
