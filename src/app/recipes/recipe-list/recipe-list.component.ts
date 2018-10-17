import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipesModule} from '../recipes.module';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: RecipesModule[];

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
}
