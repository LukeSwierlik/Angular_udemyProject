import {EventEmitter, Injectable} from '@angular/core';
import {RecipesModule} from './recipes.module';
import recipeData from './recipeData.json';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<RecipesModule>();

    private recipes: RecipesModule[] = recipeData.recipes
        .map(({ name, description, imagePath, ingredients }) => {
            return new RecipesModule(
                name,
                description,
                imagePath,
                ingredients.map((ingredient) =>
                    new IngredientModule(ingredient.name, ingredient.amount)
                )
            );
        });

    constructor(private shoppingListServie: ShoppingListService) {
    }


    getRecipes() {
        return [...this.recipes];
    }

    addIngredientsToShoppingList(ingredients: IngredientModule[]) {
        this.shoppingListServie.addIngredients(ingredients);
    }
}
