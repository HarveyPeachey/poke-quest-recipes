import React from 'react';
import IngredView from './IngredView'
import './styles/RecipeView.css';

const RecipeView = ( {recipe} ) => {
  const { recipe_name, set_ingredients/*, pokemon*/ } = recipe
  const isIngredDefined = (set_ingredients !== undefined)
  const ingred = isIngredDefined
  ? set_ingredients.map(set_ingredients => {
    return (
      <IngredView
        set_ingredients={set_ingredients}
      />
    );
  })
  : null
  return (
    <section className="recipe-view">
      <h1 className="recipe-name">{recipe_name}</h1>
      {/*<div className="ingred-image">{pokemon !== undefined ? pokemon : null}</div>*/}
      {set_ingredients !== undefined ? ingred : null }
    </section>
  )
}

export default RecipeView;
