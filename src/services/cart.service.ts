import { Injectable } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProductModel[] = [];
  constructor() { }

  addToCart(product: IProductModel) {
    if (this.cartItems.some(item => item.id === product.id)) {
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
      localStorage.setItem('key', JSON.stringify(this.cartItems));
    } else {
      this.cartItems.push(product);
      localStorage.setItem('key', JSON.stringify(this.cartItems));
    }
  }

  getItems() {
    //return this.cartItems;
    return this.cartItems = JSON.parse(localStorage.getItem('key') || '{}');
    // return JSON.parse(localStorage.getItem('key') || '{}');
  }

  // removeProduct(key: IProductModel) {
  //   this.cartItems.forEach((value, index) => {
  //     if (value == key) this.cartItems.splice(index, 1);
  //   });
  // }

  removeProduct(key: IProductModel){
    localStorage.removeItem('key');
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

}
