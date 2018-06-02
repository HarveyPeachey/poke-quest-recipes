import React from 'react';
import './styles/RecipeView.css';

const RecipeView = ( {recipeName} ) => {
  const { recipe_name } = recipeName
  return (
    <section className="recipe-view">
      <h1 className="recipe-name">{recipe_name}</h1>
    </section>
  )
}

export default RecipeView;
