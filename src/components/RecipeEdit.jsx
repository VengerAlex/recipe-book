import React from 'react';
import RecipeIngredientsEdit from "./RecipeIngredientsEdit";

const RecipeEdit = ({recipe}) => {
    console.log(recipe);
    return (
        <div className='recipe-edit'>
            <div className='recipe-edit__add-ingredient-btn-container'>
                <button className='btn recipe-edit__remove-btn'>&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label className='recipe-edit__label' htmlFor='name'>Name</label>
                <input
                    className='recipe-edit__input'
                    type="text"
                    name='name'
                    id='name'
                    value={recipe.name}
                />
                <label className='recipe-edit__label' htmlFor='cookTime'>Cook Time</label>
                <input
                    className='recipe-edit__input'
                    type="text"
                    name='cookTime'
                    id='cookTime'
                    value={recipe.cookTime}
                />
                <label className='recipe-edit__label' htmlFor='servings'>Servings</label>
                <input
                    className='recipe-edit__input'
                    type="number"
                    min='1'
                    name='servings'
                    id='servings'
                    value={recipe.serving}
                />
                <label className='recipe-edit__label' htmlFor='instructions'>Instructions</label>
                <textarea
                    className='recipe-edit__input'
                    name='instructions'
                    id="instructions"
                    value={recipe.instructions}
                />
            </div>
            <br/>
            <label className='recipe-edit__label' >Ingredients</label>
            <div className='recipe-edit__ingredient-grid'>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(el =>(
                    <RecipeIngredientsEdit key={el.id} ingredient={el}/>
                ))}
            </div>
            <div className='recipe-edit__add-ingredient-btn-container'>
                <button className='btn btn--primary btn-ingr'>Add Ingredients</button>
            </div>
        </div>
    );
};

export default RecipeEdit;