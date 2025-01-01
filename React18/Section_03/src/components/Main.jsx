import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientList from './IngredientList'
import getRecipeFromMistral from '../../ai.js'

export default function Main() {
    let [ingredients, setIngredients] = React.useState([])
    let [recipe, setRecipe] = React.useState("")
    const newIngredients = ingredients.map(
        (item) => <li key={item}>{item}</li>
    )
    
    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const newIngredient = formData.get("ingredient")
        setIngredients(
            prevIngredient => [
                ...prevIngredient, 
                newIngredient
            ]
        )
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit} method="POST">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredients"
                    name="ingredient"
                />
                <button>+ Add ingredients</button>
            </form>
            {ingredients.length > 0 ? <IngredientList newIngredients={newIngredients} getRecipe={getRecipe} /> : null}
            {recipe.length>0 ? <ClaudeRecipe recipe={recipe} /> : null}
        </main>
    )
}