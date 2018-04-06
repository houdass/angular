import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Tacos',
      'This is simply a description',
      'https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg'),
    new Recipe('Shawarma',
      'This is simply a description',
      'https://sifu.unileversolutions.com/image/en-SA/recipe-topvisual/2/1260-709/chicken-shawarma-50239021.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe)  {
    this.recipeWasSelected.emit(recipe);
  }
}
