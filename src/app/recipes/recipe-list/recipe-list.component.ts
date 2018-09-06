import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipesModule} from '../recipes.module';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output()
    recipeWasSelected = new EventEmitter<RecipesModule>();

    recipes: RecipesModule[] = [
        new RecipesModule('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new RecipesModule('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new RecipesModule('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onRecipeSelected(recipe: RecipesModule) {
        this.recipeWasSelected.emit(recipe);
    }
}
