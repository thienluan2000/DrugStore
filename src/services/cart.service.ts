import { Injectable } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProductModel[] = [];
  setJson = JSON.stringify(this.cartItems);
  constructor() { }

  addToCart(product: IProductModel) {
    if (this.cartItems.some(item => item.id === product.id)) {
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
    } else {
      this.cartItems.push(product);
      localStorage.setItem('key',JSON.stringify({key:product}));
    }
  }

  getItems() {
    return this.cartItems;
    localStorage.getItem('key');
  }

  removeProduct(key: IProductModel) {
    this.cartItems.forEach((value, index) => {
      if (value == key) this.cartItems.splice(index, 1);
    });
  }

  public updateTotalPrice(product: IProductModel) {
    const existedItem = this.cartItems.find(item => item.id === product.id)
    if (existedItem) {
      product.totalPrice = product.price * product.quantity;
      Object.assign(existedItem, product);
    }
    else {
      console.log("you fail", product);
    }
  }

}
