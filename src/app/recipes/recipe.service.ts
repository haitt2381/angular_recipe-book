import {Recipe} from "./recipe.model";
import {
  EventEmitter,
  Injectable
} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is simply a test 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [new Ingredient('Meat', 1), new Ingredient('French', 20)]),
    new Recipe('Test Recipe 2', 'This is simply a test 2', 'https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_960_720.jpg', [new Ingredient('Meat', 1)])
  ];

  constructor(private shoppingService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
