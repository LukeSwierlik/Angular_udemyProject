import {Component, OnInit} from '@angular/core';
import {IngredientModule} from '../shared/ingredient/ingredient.module';
import {ShoppingListService} from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
    ingredients: IngredientModule[];

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChanged
            .subscribe((ingredients: IngredientModule[]) => {
                this.ingredients = ingredients;
            });
    }
}
