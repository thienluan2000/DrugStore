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
    console.log(item.totalPrice, item.quantity, item.price);

  }

  alertQuantity(item: IProductModel): void {
    alert("If you change the Quantity , Please click Update TotalPrice Button to update the new total price ");
    // this.q = item.quantity;
    // if(this.q != item.quantity)
    // {
    //   this.cartService.updateTotalPrice(item);
    // }
  }

  updateTotalPrice(item: IProductModel){
    this.cartService.updateTotalPrice(item);
  }

}
