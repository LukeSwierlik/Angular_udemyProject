import {IngredientModule} from '../shared/ingredient/ingredient.module';
import ingredientData from './ingredientsData.json';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<IngredientModule[]>();

    private ingredients: IngredientModule[] = ingredientData.ingredients
        .map(({ name, amount }) => new IngredientModule(name, amount));

    getIngredients() {
        return [...this.ingredients];
    }

    addIngredient(ingredient: IngredientModule) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);
    }

    addIngredients(ingredients: IngredientModule[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit([...this.ingredients]);
    }
}
