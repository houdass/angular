import { AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  selectedRecipe: Recipe;
  message = 'This is a message';
  @ContentChild('contentExample') contentExample: ElementRef;
  @ViewChild('viewExample') viewExample: ElementRef;

  constructor() {
    console.log('### Constructor called! ###');
  }

  ngOnInit() {
    // console.log('### View ngOnInit ###', this.viewExample.nativeElement.textContent);
    console.log('### Content ngOnInit ###', this.contentExample.nativeElement.textContent);
  }

  ngOnChanges() {
    // console.log('### View ngOnChanges ###', this.viewExample.nativeElement.textContent);
    console.log('### Content ngOnChanges ###', this.contentExample.nativeElement.textContent);
  }

  ngDoCheck() {
    // console.log('### View ngDoCheck ###', this.viewExample.nativeElement.textContent);
    console.log('### Content ngDoCheck ###', this.contentExample.nativeElement.textContent);
  }

  ngAfterContentInit() {
    // console.log('### View ngAfterContentInit ###', this.viewExample.nativeElement.textContent);
    console.log('### Content ngAfterContentInit ###', this.contentExample.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    // console.log('### View ngAfterContentChecked ###', this.viewExample.nativeElement.textContent);
    console.log('### Content ngAfterContentChecked ###', this.contentExample.nativeElement.textContent);
  }

  ngAfterViewInit() {
    // console.log('### View ngAfterViewInit ###', this.viewExample.nativeElement.textContent);
    console.log('### Content ngAfterViewInit ###', this.contentExample.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    // console.log('### View ngAfterViewChecked ###', this.viewExample.nativeElement.textContent);
    console.log('### Content ngAfterViewChecked ###', this.contentExample.nativeElement.textContent);
  }

  ngOnDestroy() {
    // console.log('### View ngOnDestroy ###', this.viewExample.nativeElement.textContent);
    console.log('### Content ngOnDestroy ###', this.contentExample.nativeElement.textContent);
  }
}
