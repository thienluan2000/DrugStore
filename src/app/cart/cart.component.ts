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
  totalBill = this.cartService.countBill();
  @Input() item!: IProductModel | null;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeProduct(item: IProductModel) {
    this.cartService.removeProduct(item);
  }

  alertQuantity(): void {
    alert("If you change the Quantity , Please click Update TotalPrice Button to update the new total price ");
  }

  updateTotalPrice(item: IProductModel) {
    this.cartService.updateTotalPrice(item);
  }

  countBill() {
    this.cartService.countBill();
  }

}
