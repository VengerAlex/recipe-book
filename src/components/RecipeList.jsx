import React, {useContext} from 'react';
import Recipe from "./Recipe";
import {RecipeContext} from "../App";

const RecipeList = ({recipes}) => {
    const {handleRecipeDelete, handleRecipeAdd} = useContext(RecipeContext);

    return (
        <div className='recipe-list'>
            {recipes.length > 0 ? recipes.map(el => <Recipe
                key={recipes.id} {...el}
            />) : 'There is no recipies'}

            <div className="recipe-list__btn">
                <button
                    onClick={handleRecipeAdd}
                    className='btn btn--primary'>
                    Add Recipe
                </button>
            </div>
        </div>
    );
};

export default RecipeList;