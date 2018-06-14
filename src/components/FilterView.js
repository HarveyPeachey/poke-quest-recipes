import React from 'react';
import './styles/FilterView.css';

const FilterView = ({ handleFilterClick }) => {
  return (
    <section className="filter-view">
      <button className="type-filter" onClick={() => handleFilterClick(0)} ></button>
      <button className="poke-filter" onClick={() => handleFilterClick(1)} ></button>
    </section>
  )
}

export default FilterView;
