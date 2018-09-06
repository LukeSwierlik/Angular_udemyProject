import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
    oddNumbers = [1, 3, 5];
    evenNumbers = [2, 4];
    onlyOdd = false;
    value = 5;
}
