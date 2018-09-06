import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show')
    isOpen = false;

    @HostListener('click')
    toggleOpen() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.add('show');
        } else {
            this.elementRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
        }

    }

    constructor(private elementRef: ElementRef) {

    }
}
