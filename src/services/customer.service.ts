import { Injectable } from '@angular/core';
import { ICustomerModel } from 'src/models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customer!: ICustomerModel;
  constructor() {
    this.customer = new ICustomerModel('','','','','',);
  }


  public signUp(customer: ICustomerModel) {
    localStorage.setItem('customer', JSON.stringify(this.customer));
    console.log(customer);
  }
}
