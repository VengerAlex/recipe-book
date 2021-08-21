import RecipeList from "./components/RecipeList";


const App = () => {
    return (
        <>
            <RecipeList recipes={sampleRecipes}/>
        </>
    )
}

const sampleRecipes = [
    {
        id: 1,
        name: 'Plain Chicken',
        serving: 3,
        cookTime: '1:45',
        instructions: '1. Put salt on Chicken\n. Put chicken in oven\n3. Eat chicken',
    },
    {
        id: 2,
        name: 'Plain Pork',
        serving: 5,
        cookTime: '3:45',
        instructions: '1. Put paprika on Pork\n2. Put paprika in oven\n3. Eat paprika',
    },
]

export default App