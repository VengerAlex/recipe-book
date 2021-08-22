import React from 'react';
import Ingredient from "./Ingredient";

const IngredientList = ({ingredients}) => {
    const ingredientElements = ingredients.map(el => {
        return <Ingredient key={el.id} {...el}/>
    });

    return (
        <div className='ingredient-grid'>
            {ingredientElements}
        </div>
    );
};

export default IngredientList;