import { Injectable } from '@angular/core';
import { ICustomerModel } from 'src/models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer! : ICustomerModel;

  constructor() {
  }

  public signUp(customer: ICustomerModel) {
    localStorage.setItem('customer', JSON.stringify(customer));
    console.log(customer);
  }

  public signIn(customer: ICustomerModel) {
    customer = JSON.parse(localStorage.getItem('customer') || '{}');
    //const checkCustomer = this.customer.fin(item => item.username === customer.username)
     if (customer.username ) {
      // product.totalPrice = product.price * product.quantity;
      // Object.assign(existedItem, product);
      // localStorage.setItem('key', JSON.stringify(this.cartItems));
      console.log("You have login")
    }
    else {
      console.log("you fail");
    }
  }

}
