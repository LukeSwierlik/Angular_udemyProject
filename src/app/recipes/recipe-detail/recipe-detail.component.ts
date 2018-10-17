import {Component, Input, OnInit} from '@angular/core';
import {RecipesModule} from '../recipes.module';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    @Input()
    recipes: RecipesModule;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipes.ingredients);
    }
}
