import {Component, OnInit} from '@angular/core';
import {RecipesModule} from './recipes.module';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
    selectedRecipe: RecipesModule;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.recipeService.recipeSelected.subscribe(
            (recipe: RecipesModule) => {
                this.selectedRecipe = recipe;
            }
        );
    }

}
