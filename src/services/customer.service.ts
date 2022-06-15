import { Injectable } from '@angular/core';
import { ICustomerModel } from 'src/models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer!: ICustomerModel;
  guest!: ICustomerModel;
  notification: string = "";
  constructor() {
  }

  public signUp(customer: ICustomerModel) {
    const checkCondition = customer.username.length >= 8 && customer.email.includes("@") == true && customer.password.length >= 8;
    if (checkCondition) {
      localStorage.setItem('customer', JSON.stringify(customer));
      console.log("SignUp success", customer);
      window.alert("Sign Up Success");
    }
    else {
      console.log('SignUp fail');
    }
  }

  public signIn(guest: ICustomerModel) {
    this.customer = JSON.parse(localStorage.getItem('customer') || '{}');
    const checkCondition = this.customer.username === guest.username && this.customer.password === guest.password;
    if (checkCondition) {
      window.alert("Login success")
    }
    else {
      this.showNotification();
      console.log(this.notification);
    }
  }

  public showNotification() {
    this.notification = "Login Fail!";
    // setTimeout(() => {
    //   this.notification = "";
    // }, 3000);
  }


}
