import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tacos',
      'This is simply a description',
      'https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg',
      [
        new Ingredient('Meat', 3),
        new Ingredient('French fries', 5)
      ]),
    new Recipe('Shawarma',
      'This is simply a description',
      'https://sifu.unileversolutions.com/image/en-SA/recipe-topvisual/2/1260-709/chicken-shawarma-50239021.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Honey', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
