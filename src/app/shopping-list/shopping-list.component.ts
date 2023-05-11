import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>
  private igChangeSub: Subscription

  constructor(
    private shoppingService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>,
  ) {
  }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList')
    // this.ingredients = this.shoppingService.getIngredients();
    // this.igChangeSub = this.shoppingService.ingredientsChanged
    //   .subscribe((ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients
    //   })
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe()
  }

  onEditItem(index: number) {
    // this.shoppingService.starterEditing.next(index)
  }
}
