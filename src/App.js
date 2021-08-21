import RecipeList from "./components/RecipeList";
import {useState} from "react";
import { v4 as uuid_v4 } from "uuid";

const App = () => {
    const [recipes, setRecipes] = useState(sampleRecipes);
    const handleRecipeArr = () => {
        const newRecipe = {
            id: uuid_v4(),
            name: 'New',
            serving: 12,
            cookTime: '3.11',
            instructions: 'instruct',
            ingredients: [
                {id: uuid_v4(), name: 'name', amount: '1 pounds'},
            ]
        }

        setRecipes([...recipes, newRecipe]);
    }

    return (
        <>
            <RecipeList
                handleRecipeArr={handleRecipeArr}
                recipes={recipes}
            />
        </>
    )
}



const sampleRecipes = [
    {
        id: 1,
        name: 'Plain Chicken',
        serving: 3,
        cookTime: '1:45',
        instructions: '1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat chicken',
        ingredients: [
            {id: 1, name: 'Chicken', amount: '2 pounds'},
            {id: 2, name: 'Salt', amount: '1 pounds'},
        ]
    },
    {
        id: 2,
        name: 'Plain Pork',
        serving: 5,
        cookTime: '3:45',
        instructions: '1. Put paprika on Pork\n2. Put paprika in oven\n3. Eat paprika',
        ingredients: [
            {id: 1, name: 'Paprika', amount: '321 pounds'},
            {id: 2, name: 'Salt', amount: '12 pounds'},
        ]
    },
]

export default App