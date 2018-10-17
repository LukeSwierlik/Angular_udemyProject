import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModule} from '../../shared/ingredient/ingredient.module';
import {ShoppingListService} from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput')
    nameInputRef: ElementRef;

    @ViewChild('amountInput')
    amountInputRef: ElementRef;

    @Output()
    ingedientAdded = new EventEmitter<IngredientModule>();

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit() {
    }

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new IngredientModule(ingName, ingAmount);

        this.shoppingListService.addIngredient(newIngredient);
    }
}
