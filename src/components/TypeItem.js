import React from 'react';
import './styles/TypeItem.css';


const TypeItem = ({pokeFood}) => {
  const { id, type, color } = pokeFood;
  const style = { backgroundColor: color };
  return <button style={style} className="type-item">{type}</button>
};


export default TypeItem;
