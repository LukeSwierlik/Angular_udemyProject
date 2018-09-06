import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModule} from "../../shared/ingredient/ingredient.module";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput')
    nameInputRef: ElementRef;

    @ViewChild('amountInput')
    amountInputRef: ElementRef;

    @Output()
    ingedientAdded = new EventEmitter<IngredientModule>();

    constructor() {
    }

    ngOnInit() {
    }

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new IngredientModule(ingName, ingAmount);

        this.ingedientAdded.emit(newIngredient);
    }
}
