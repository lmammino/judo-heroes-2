import React from 'react';

const medalTypes = {
  'G': 'Gold',
  'S': 'Silver',
  'B': 'Bronze'
};

const Medal = (props) => (
  <li className="medal">
    <span className={`symbol symbol-${props.type}`}
      title={medalTypes[props.type]}>
        {props.type}
    </span>
    <span className="year">{props.year}</span>
    <span className="city"> {props.city}</span>
    <span className="event"> ({props.event})</span>
    <span className="category"> {props.category}</span>
  </li>
);

export default Medal;
