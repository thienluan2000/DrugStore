import { Injectable } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProductModel[] = [];
  constructor() { }

  public addToCart(product: IProductModel) {
    const existedItem = this.cartItems.some(item => item.id === product.id)
    if (existedItem) {
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
      localStorage.setItem('key', JSON.stringify(this.cartItems));
    } else {
      this.cartItems.push(product);
      localStorage.setItem('key', JSON.stringify(this.cartItems));
    }
  }

  public getItems() {
    return this.cartItems = JSON.parse(localStorage.getItem('key') || '{}');
  }

  public removeProduct(key: IProductModel) {
    this.cartItems.forEach((value, index) => {
      if (value == key) {
        this.cartItems.splice(index, 1);
        localStorage.setItem('key', JSON.stringify(this.cartItems));
      }
    });
  }

  public clearCart() {
    localStorage.clear();
    this.getItems();
    window.location.reload();
  }

  public updateTotalPrice(product: IProductModel) {
    const existedItem = this.cartItems.find(item => item.id === product.id)
    if (existedItem) {
      product.totalPrice = product.price * product.quantity;
      Object.assign(existedItem, product);
      localStorage.setItem('key', JSON.stringify(this.cartItems));
    }
    else {
      console.log("you fail", product);
    }
  }

  public countBill(product: IProductModel) {
    var total = 0;
    const existedItem = this.cartItems.some(item => item.id === product.id)
    if (existedItem) {
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
    } else {
      total = product.totalPrice;
      console.log(product.totalPrice);
    }
  }

}
