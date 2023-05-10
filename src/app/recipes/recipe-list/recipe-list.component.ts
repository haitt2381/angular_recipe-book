import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is simply a test 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Test Recipe 2', 'This is simply a test 2', 'https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_960_720.jpg')
  ];

  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

  ngOnInit(): void {
  }

}
