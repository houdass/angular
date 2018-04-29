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
import {RecipeService} from './recipe.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
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
  /* message = 'This is a message';
  @ContentChild('contentExample') contentExample: ElementRef;
  @ViewChild('viewExample') viewExample: ElementRef; */
  myNumbersSubscription: Subscription;
  myObservableSubscription: Subscription;

  constructor(private recipeService: RecipeService) {
    console.log('### Constructor called! ###');
  }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.myNumbersSubscription = myNumbers.subscribe((number: number) => {
      console.log(number);
    });

     const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('After 1000');
      }, 1000);
      setTimeout(() => {
        observer.next('After 2000');
      }, 2000);
      setTimeout(() => {
        // observer.next('After 3000');
        // observer.error('There is a problem here !!!');
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('After 4000');
      }, 4000);
    });

    this.myObservableSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
      );
    /* this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    }); */

    // console.log('### View ngOnInit ###', this.viewExample.nativeElement.textContent);
    // console.log('### Content ngOnInit ###', this.contentExample.nativeElement.textContent);
  }

  ngOnChanges() {
    // console.log('### View ngOnChanges ###', this.viewExample.nativeElement.textContent);
    // console.log('### Content ngOnChanges ###', this.contentExample.nativeElement.textContent);
  }

  ngDoCheck() {
    // console.log('### View ngDoCheck ###', this.viewExample.nativeElement.textContent);
    // console.log('### Content ngDoCheck ###', this.contentExample.nativeElement.textContent);
  }

  ngAfterContentInit() {
    // console.log('### View ngAfterContentInit ###', this.viewExample.nativeElement.textContent);
    // console.log('### Content ngAfterContentInit ###', this.contentExample.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    // console.log('### View ngAfterContentChecked ###', this.viewExample.nativeElement.textContent);
    // console.log('### Content ngAfterContentChecked ###', this.contentExample.nativeElement.textContent);
  }

  ngAfterViewInit() {
    // console.log('### View ngAfterViewInit ###', this.viewExample.nativeElement.textContent);
    // console.log('### Content ngAfterViewInit ###', this.contentExample.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    // console.log('### View ngAfterViewChecked ###', this.viewExample.nativeElement.textContent);
    // console.log('### Content ngAfterViewChecked ###', this.contentExample.nativeElement.textContent);
  }

  ngOnDestroy() {
    // console.log('### View ngOnDestroy ###', this.viewExample.nativeElement.textContent);
    // console.log('### Content ngOnDestroy ###', this.contentExample.nativeElement.textContent);
    this.myNumbersSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();
  }
}
