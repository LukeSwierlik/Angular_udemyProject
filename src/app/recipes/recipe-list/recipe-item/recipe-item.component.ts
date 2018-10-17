import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipesModule} from '../../recipes.module';
import {RecipeService} from '../../recipe.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
    @Input()
    recipe: RecipesModule;

    @Output()
    recipeSelected = new EventEmitter<void>();

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
    }

    onSelected(event) {
        event.preventDefault();
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}
