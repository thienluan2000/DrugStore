import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { IProductModel } from 'src/models/product.model';
import { ICustomerModel } from 'src/models/customer.model';
import { NotificationService } from 'src/services/notification.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  information!: ICustomerModel;
  items = this.cartService.getItems();
  totalBill = this.cartService.countBill();
  item!: IProductModel | null;
  constructor(private cartService: CartService, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.information = new ICustomerModel('', '', '', '', '',);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeProduct(item: IProductModel) {
    this.cartService.removeProduct(item);
  }

  alertQuantity() {
    this.notifyService.showWarning("If you change the Quantity , Please click Update TotalPrice Button to update the new total price", "Warning!");
  }

  updateTotalPrice(item: IProductModel) {
    this.cartService.updateTotalPrice(item);
  }

  saveInformation(information: ICustomerModel) {
    this.cartService.saveInformation(information);
  }

}
