import React, {useContext, useEffect} from 'react';
import IngredientList from "./IngredientList";
import {RecipeContext} from "../App";


const Recipe = ({name, cookTime, instructions, serving, ingredients, id}) => {
    const {handleRecipeDelete, handleRecipeSelect} = useContext(RecipeContext);


    return (
        <div className='recipe'>
            <div className='recipe__header'>
                <h3 className='recipe__title'>{name}</h3>
                <div>
                    <button
                        onClick={() => handleRecipeSelect(id)}
                        className='btn btn--primary mr-1'>
                        Edit
                    </button>
                    <button
                        onClick={() => handleRecipeDelete(id)}
                        className='btn btn--danger'>
                        Delete
                    </button>
                </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Cook Time:</span>
                <span className='recipe__value'>{cookTime}</span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Servings:</span>
                <span className='recipe__value'>{serving}</span>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label recipe__value--indented '>Instructions:</span>
                <div className='recipe__instructions'>
                    {instructions}
                </div>
            </div>
            <div className='recipe__row'>
                <span className='recipe__label'>Ingredients:</span>
                <div>
                    <IngredientList ingredients={ingredients}/>
                </div>
            </div>
        </div>
    );
};

export default Recipe;