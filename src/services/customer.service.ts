import { Injectable } from '@angular/core';
import { ICustomerModel } from 'src/models/customer.model';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer!: ICustomerModel;
  guest!: ICustomerModel;
  constructor(private notifyService: NotificationService) {
  }

  public signUp(customer: ICustomerModel) {
    const checkCondition = customer.username.length >= 8 && customer.email.includes("@") == true && customer.password.length >= 8;
    if (checkCondition) {
      localStorage.setItem('customer', JSON.stringify(customer));
      console.log("SignUp success", customer);
      this.notifyService.showSuccess("You have Sign Up success !", "Sign Up Success");
    }
    else {
      this.notifyService.showError("You have Sign Up Fail !", "Sign Up Fail");
    }
  }

  public signIn(guest: ICustomerModel) {
    this.customer = JSON.parse(localStorage.getItem('customer') || '{}');
    const checkCondition = this.customer.username === guest.username && this.customer.password === guest.password;
    if (checkCondition) {
      this.notifyService.showSuccess("You have login success !", "Login Success");
    }
    else {
      this.notifyService.showError("Username or Password is not correct!", "Login Fail");
    }
  }


}
