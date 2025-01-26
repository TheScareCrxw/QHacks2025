export default class Recipe {
    createRecipeObject(data) {
        return {
            id: data.idMeal,
            title: data.strMeal,
            image: data.strMealThumb,
            ingredients: Recipe.parseIngredients(data),
            instructions: data.strInstructions,
        };
    }

    static parseIngredients(data) {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = data[`strIngredient${i}`];
            const measure = data[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredients.push(`${ingredient} - ${measure}`);
            }
        }
        return ingredients;
    }
}
