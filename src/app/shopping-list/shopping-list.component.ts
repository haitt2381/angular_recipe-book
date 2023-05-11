import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";

import {Ingredient} from "../shared/ingredient.model";
import * as fromApp from "../store/app.reducer"
import * as ShoppingListAction from "./store/shopping-list.actions";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>
  private igChangeSub: Subscription

  constructor(
    private store: Store<fromApp.AppState>,
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
    // this.igChangeSub.unsubscribe()
  }

  onEditItem(index: number) {
    // this.shoppingService.starterEditing.next(index)
    this.store.dispatch(new ShoppingListAction.StartEdit(index))
  }
}
