import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onToShoppingList() {
      this.recipeService.addIngredientToShoppingList(this.recipeSelected.ingredients)
  }

}
