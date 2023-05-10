import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f") slForm: NgForm
  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.starterEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index
          this.editMode = true
          this.editedItem = this.shoppingService.getIngredient(index)
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onSubmitItem(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false
    form.reset()
  }

  onClearForm(){
    this.slForm.reset()
    this.editMode = false
  }

  onDeleteItem() {
    this.shoppingService.deleteIngredient(this.editedItemIndex)
    this.onClearForm()

  }
}
