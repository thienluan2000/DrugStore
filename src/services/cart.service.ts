import { Injectable } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: IProductModel[] = [];
  public q! : number ;
  constructor() { }

  addToCart(product: IProductModel) {
    const found = this.items.find(
      item => item === product
    );
    if (found) {
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
    } else {
      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  removeProduct(key: IProductModel) {
    this.items.forEach((value, index) => {
      if (value == key) this.items.splice(index, 1);
    });
  }

  updateTotalPrice(product: IProductModel){
    const found = this.items.find(
      item => item.quantity === product.quantity
    );

    // this.q = product.quantity;
    if(found){
      product.totalPrice = product.price * product.quantity;
      console.log(product.totalPrice);
    }
    else{
      console.log("you fail",product);
      console.log(this.items);

    }
    //console.log(product.quantity,product.price,product.totalPrice);
  }

}
