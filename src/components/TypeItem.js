import React from 'react';
import './styles/TypeItem.css';


const TypeItem = ({pokeFood, handleOnClick}) => {
  const { id, type, color } = pokeFood;
  const style = { backgroundColor: color };
  return <button onClick={() => handleOnClick(id)} style={style} className="type-item">{type}</button>
};


export default TypeItem;
