import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Today's Date: {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
       <li (click)="isFavorite(recipeType)" *ngFor="let recipeType of recipes">{{recipeType.title}} <br> {{recipeType.directions}} <br> {{recipeType.ingredients}} <br>
       git \
       <button (click)="editRecipe()">Edit!</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Recipe Box';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookies', 'Ingredients', 'Directions'),
    new Recipe('Chocolate Chip Cookies', 'Ingredients', 'Directions'),
    new Recipe('Chocolate Chip Cookies', 'Ingredients', 'Directions')
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
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
