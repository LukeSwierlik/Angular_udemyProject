import {Component, Input, OnInit} from '@angular/core';
import {RecipesModule} from "../recipes.module";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input()
    recipes: RecipesModule;

    constructor() {
    }

    ngOnInit() {
    }

}
