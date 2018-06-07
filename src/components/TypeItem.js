import React from 'react';
import './styles/TypeItem.css';


const TypeItem = ({ recipe, handleOnClick }) => {
  const { type_id, type_name, color } = recipe;
  const style = { backgroundColor: color };
  return <button onClick={() => handleOnClick(type_id)} style={style} className="type-item">{type_name}</button>
};


export default TypeItem;
