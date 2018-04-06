import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  // <p appBasicHighlight>App Basic Highlight Example</p>
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
