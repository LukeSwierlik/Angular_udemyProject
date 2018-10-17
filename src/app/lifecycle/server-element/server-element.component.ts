import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck,
    ElementRef, Input,
    OnChanges,
    OnDestroy,
    OnInit, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html'
})
export class ServerElementComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    @Input('srvElement')
    element: {
        type: string,
        name: string,
        content: string
    };

    @Input()
    name: string;

    @ViewChild('heading')
    header: ElementRef;

    @ContentChild('contentParagraph')
    paragraph: ElementRef;

    constructor() {
        console.log('constructor called!');
        console.log('\n');
    }

    ngOnInit() {
        console.log('ngOnInit called!');
        console.log('Text Content: ', this.header.nativeElement.textContent);
        console.log('Text Content of paragraph: ', this.paragraph.nativeElement.textContent);
        console.log('\n');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges called!');
        console.log(changes);
        console.log('\n');
    }

    ngDoCheck(): void {
        console.log('ngDoCheck called!');
        console.log('\n');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy called!');
        console.log('\n');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit called!');
        console.log('Text Content of paragraph: ', this.paragraph.nativeElement.textContent);
        console.log('\n');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked called!');
        console.log('\n');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit called!');
        console.log('Text Content: ', this.header.nativeElement.textContent);
        console.log('\n');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked called!');
        console.log('\n');
    }
}
