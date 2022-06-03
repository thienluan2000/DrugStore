import { Injectable } from '@angular/core';
import { ICustomerModel } from 'src/models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer!: ICustomerModel;
  guest!: ICustomerModel;
  constructor() {
  }

  public signUp(customer: ICustomerModel) {
    localStorage.setItem('customer', JSON.stringify(customer));
    console.log(customer);
  }

  public signIn(guest: ICustomerModel) {
    this.customer = JSON.parse(localStorage.getItem('customer') || '{}');
    if (this.customer.username === guest.username && this.customer.password === guest.password) {
      console.log("Login success")
    }
    else {
      console.log("Login fail");
    }
  }

}
