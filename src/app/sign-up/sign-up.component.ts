import { Component, OnInit } from '@angular/core';
import { ICustomerModel } from 'src/models/customer.model';
import { CustomerService } from 'src/services/customer.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  customer!: ICustomerModel;
  repassword!: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = new ICustomerModel('', '', '', '', '',);
  }

  public signUp(customer: ICustomerModel) {
    if (this.repassword === this.customer.password) {
      this.customerService.signUp(customer);
    }
    else {
      console.log("Sign Up Fail");
    }
  }


}

