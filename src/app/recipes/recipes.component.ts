import {Component, OnInit} from '@angular/core';
import {RecipesModule} from './recipes.module';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    selectedRecipe: RecipesModule;

    constructor() {
    }

    ngOnInit() {
    }

}
