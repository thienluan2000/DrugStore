import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { IProductModel } from 'src/models/product.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  @Input() item!: IProductModel | null;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.items);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeProduct(item: IProductModel) {
    this.cartService.removeProduct(item);
  }

  changeQuantity(item: IProductModel) {
    alert("your quantity is : " + item.quantity);
    item.totalPrice = item.price * item.quantity;
    console.log(item.totalPrice, item.quantity, item.price);
  }

  alertQuantity(): void {
    alert("If you change the Quantity,Please click Update TotalPrice Button to update the new total price ");
  }

}
