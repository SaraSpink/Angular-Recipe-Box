import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Today's Date: {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ol>
       <li (click)="isFavorite(recipeType)" *ngFor="let recipeType of recipes">{{recipeType.title}}  {{recipeType.directions}}
            <ul>
              <li>{{recipeType.ingredients}}</li>
            </ul>
        <button (click)="editRecipe()">Edit!</button>
       </li>
    </ol>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Recipe Box!!!';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookies', ['chocolate', 'sugar', 'butter'], 'bake it'),
    new Recipe('Pizza', ['dough', 'sauce', 'veggies'], 'toss it'),
    new Recipe('Broth', ['bones', 'water', 'spices'], 'boil it for a long time!')
  ];

  editRecipe() {
   alert("You just requested to edit a Recipe!");
  }

  isFavorite(clickedRecipe: Recipe) {
    if(clickedRecipe.favorite === true) {
      alert("you favorited this recipe!");
    }
  }
}

export class Recipe {
  public favorite: boolean = false;
  constructor(public title: string, public ingredients: string[], public directions: string) { }
}
