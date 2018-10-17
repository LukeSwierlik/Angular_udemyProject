import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientModule} from '../shared/ingredient/ingredient.module';

@NgModule({
    imports: [CommonModule],
    declarations: []
})

export class RecipesModule {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: IngredientModule[];

    constructor(name: string, desc: string, imagePath: string, ingredients: IngredientModule[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
