import React from 'react';
import TypeItem from './TypeItem'
import { pokeFood } from '../pokeFood';
import './styles/TypeList.css';

const TypeList = () => {
  return (
    <section className="type-list">
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
    </section>
  )
}

export default TypeList;
