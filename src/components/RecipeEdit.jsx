import React, {useContext} from 'react';
import RecipeIngredientsEdit from "./RecipeIngredientsEdit";
import {RecipeContext} from "../App";
import {v4 as uuid_v4} from "uuid";

const RecipeEdit = ({recipe}) => {
    const {handleRecipeChange, handleRecipeSelect} = useContext(RecipeContext);

    const handleChange = (changes) => {
        handleRecipeChange(recipe.id, {...recipe, ...changes});
    }
    const handleIngredientChange = (id, ingredient) => {
        const newIngredients = [...recipe.ingredients];
        const index = newIngredients.findIndex(el => el.id === id);
        newIngredients[index] = ingredient;
        handleChange({ingredients: newIngredients});
    }
    const handleIngredientAdd = () => {
        const newIngredient = {
            id: uuid_v4(),
            name: '',
            amount: ''
        }
        handleChange({ingredients: [...recipe.ingredients, newIngredient]})
    }
    const handleIngredientRemove = (id) => {
        handleChange({ingredients: recipe.ingredients.filter(el => el.id !== id)})
    }
    return (
        <div className='recipe-edit'>
            <div className='recipe-edit__add-ingredient-btn-container'>
                <button
                    onClick={() => handleRecipeSelect(undefined)}
                    className='btn recipe-edit__remove-btn'>
                    &times;
                </button>
            </div>
            <div className="recipe-edit__details-grid">
                <label className='recipe-edit__label' htmlFor='name'>Name</label>
                <input
                    className='recipe-edit__input'
                    type="text"
                    name='name'
                    id='name'
                    value={recipe.name}
                    onChange={(e) => handleChange({name: e.target.value})}
                />
                <label className='recipe-edit__label' htmlFor='cookTime'>Cook Time</label>
                <input
                    className='recipe-edit__input'
                    type="text"
                    name='cookTime'
                    id='cookTime'
                    onChange={(e) => handleChange({cookTime: e.target.value})}
                    value={recipe.cookTime}
                />
                <label className='recipe-edit__label' htmlFor='servings'>Servings</label>
                <input
                    className='recipe-edit__input'
                    type="number"
                    min='1'
                    name='servings'
                    id='servings'
                    onChange={(e) => handleChange({serving: parseInt(e.target.value) || ''})}
                    value={recipe.serving}
                />
                <label className='recipe-edit__label' htmlFor='instructions'>Instructions</label>
                <textarea
                    className='recipe-edit__input'
                    name='instructions'
                    id="instructions"
                    value={recipe.instructions}
                    onChange={(e) => handleChange({instructions: e.target.value})}
                />
            </div>
            <br/>
            <label className='recipe-edit__label' >Ingredients</label>
            <div className='recipe-edit__ingredient-grid'>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(el =>(

                    <RecipeIngredientsEdit
                        handleIngredientRemove={handleIngredientRemove}
                        key={el.id}
                        ingredient={el}
                        handleIngredientChange={handleIngredientChange}
                    />
                ))}
            </div>
            <div className='recipe-edit__add-ingredient-btn-container'>
                <button
                    onClick={() => handleIngredientAdd()}
                    className='btn btn--primary btn-ingr'>
                    Add Ingredients</button>
            </div>
        </div>
    );
};

export default RecipeEdit;