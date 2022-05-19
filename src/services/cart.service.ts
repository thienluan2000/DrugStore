import { Injectable } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: IProductModel[] = [];
  constructor() { }

  addToCart(product: IProductModel) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }

  removeProduct(key: IProductModel) {
    this.items.forEach((value, index) => {
      if (value == key) this.items.splice(index, 1);
    });
  }

}
