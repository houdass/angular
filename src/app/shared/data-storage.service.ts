import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  url = 'https://ng-maximilian-udemy-app.firebaseio.com/ng-maximilian-udemy-app.json';

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    return this.http.put(this.url, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get(`${this.url}?auth=${token}`)
    .map((response: Response) => {
      const recipes: Recipe[] = response.json();
      return recipes.map((recipe) => {
        recipe.ingredients = recipe.ingredients || [];
        return recipe;
      });
    })
    .subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
