import { Injectable } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
import { ICustomerModel } from 'src/models/customer.model';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProductModel[] = [];
  constructor(private notifyService: NotificationService) { }
  public addToCart(product: IProductModel) {
    const existedItem = this.cartItems.some(item => item.id === product.id)
    if (existedItem) {
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
      localStorage.setItem('key', JSON.stringify(this.cartItems));
      this.notifyService.showSuccess(product.name + " has been added to cart", "Add Product Success!");
    } else {
      this.cartItems.push(product);
      localStorage.setItem('key', JSON.stringify(this.cartItems));
      this.notifyService.showSuccess(product.name + " has been added to cart", "Add Product Success!");
    }
  }

  //Function Display product had saved from local storage to cart
  public getItems() {
    return this.cartItems = JSON.parse(localStorage.getItem('key') || '{}');
  }

  //Function remove one product in cart
  public removeProduct(key: IProductModel) {
    this.cartItems.forEach((value, index) => {
      if (value == key) {
        this.cartItems.splice(index, 1);
        localStorage.setItem('key', JSON.stringify(this.cartItems));
        this.notifyService.showSuccess(key.name + " has been removed", "Remove Success")
      }
    });
  }

  //Function Remove all product in cart
  public clearCart() {
    this.cartItems = [];
    localStorage.setItem('key', JSON.stringify(this.cartItems));
    window.location.reload();
  }

  //Function update total price of product when change quantity
  public updateTotalPrice(product: IProductModel) {
    const existedItem = this.cartItems.find(item => item.id === product.id)
    if (existedItem) {
      product.totalPrice = product.price * product.quantity;
      Object.assign(existedItem, product);
      localStorage.setItem('key', JSON.stringify(this.cartItems));
      this.notifyService.showSuccess("The price of " + product.name + " has been updated !", "Price Update");
      window.setTimeout(function () { location.reload() }, 1000)
    }
    else {
      console.log("you fail", product);
    }
  }

  //function count total of bill
  public countBill() {
    var total = 0;
    this.cartItems.forEach(items => total = total + items.totalPrice);
    return total;
  }


  //Function Save information of customer without login
  public saveInformation(information: ICustomerModel) {
    const checkCondition = information.username === null || information.username === '' || information.phonenumber === null || information.phonenumber === '' || information.address === null || information.address === '';
    if (checkCondition) {
      this.notifyService.showError("You not fill enough information!", "Error information")
    }
    else {
      localStorage.setItem('information', JSON.stringify(information));
      console.log("SignUp success", information);
      this.notifyService.showSuccess("Order success!", "Check information")
      this.clearCart();
    }
  }

}
