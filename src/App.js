import RecipeList from "./components/RecipeList";
import {createContext, useState, useEffect} from "react";
import {v4 as uuid_v4} from "uuid";
import RecipeEdit from "./components/RecipeEdit";

export const RecipeContext = createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';


const App = () => {
    const [selectedRecipeIp, setSelectedRecipeId] = useState();
    const [recipes, setRecipes] = useState(sampleRecipes);
    useEffect(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(recipeJSON !== null){
            setRecipes(JSON.parse(recipeJSON))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
    }, [recipes])


    const  selectedRecipe = recipes.find(el => el.id === selectedRecipeIp);

    const handleRecipeSelect = id => setSelectedRecipeId(id);
    const handleRecipeAdd = () => {
        const newRecipe = {
            id: uuid_v4(),
            name: '',
            serving: 1,
            cookTime: '',
            instructions: '',
            ingredients: [
                {id: uuid_v4(), name: '', amount: ''},
            ]
        }
        setSelectedRecipeId(newRecipe.id);
        setRecipes([...recipes, newRecipe]);
    }
    const handleRecipeDelete = (id) => {
        if(selectedRecipeIp !== null && selectedRecipeIp === id){
            setSelectedRecipeId(undefined)
        }
        setRecipes(recipes.filter((el) => el.id !== id))
    }
    const handleRecipeChange = (id, recipe) => {
        const newRecipes = [...recipes];
        const index = newRecipes.findIndex(el => el.id === id);
        newRecipes[index] = recipe;
        setRecipes(newRecipes);
    }
    const recipeContextValue = {
        handleRecipeAdd,
        handleRecipeDelete,
        handleRecipeSelect,
        handleRecipeChange
    }


    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList
                recipes={recipes}
            />
            {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
        </RecipeContext.Provider>
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