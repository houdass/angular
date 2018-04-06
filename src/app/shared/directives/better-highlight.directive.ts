import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'red';
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor() {
  }

  // <p appBetterHighlight>App Better Highlight Example</p>
  // <p appBetterHighlight [defaultColor]="'transparent'" [highlightColor]="'blue'">App Better Highlight Example</p>
  // <p appBetterHighlight defaultColor="transparent" highlightColor="blue">App Better Highlight Example</p>
  /*
  You can also do this :
  <p [appBetterHighlight]="'orange'" [highlightColor]="'grey'">App Better Highlight Example</p>
  or,
  <p appBetterHighlight="orange" highlightColor="grey">App Better Highlight Example</p>
  and change @Input() defaultColor = 'transparent'; to @Input('appBetterHighlight') defaultColor = 'transparent';
  (the same as the name of the directive selector: '[appBetterHighlight]')
  */
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseenter(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}

/* import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // <p appBetterHighlight>App Better Highlight Example</p>
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseenter')
  mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }
} */
