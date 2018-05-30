import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {

  url = 'https://ng-maximilian-udemy-app.firebaseio.com/ng-maximilian-udemy-app.json';

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    // const token = this.authService.getToken();
    // const params = new HttpParams().append('auth', token);
    /* return this.httpClient.put(this.url, this.recipeService.getRecipes(), {
      params
    }); */
    /* const headers = new HttpHeaders().append('Authorization', 'Bearer Ad5jar8eq ..');
    return this.httpClient.put(url, this.recipeService.getRecipes(), {
      observe: 'events',
      headers
    }); */
    const req = new HttpRequest('PUT', this.url, this.recipeService.getRecipes(), {
      reportProgress: true,
      // params
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>(this.url, {
      observe: 'body',
      responseType: 'json'
    })
      .map((recipes) => {
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
