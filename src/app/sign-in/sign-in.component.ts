import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomerModel } from 'src/models/customer.model';
import { CustomerService } from 'src/services/customer.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  notification: string = ''
  guest!: ICustomerModel;
  constructor(private router: Router, private customerService: CustomerService) {
    this.guest = new ICustomerModel('', '', '', '', '',);
  }

  ngOnInit(): void {
  }

  public signUp() {
    this.router.navigate(['signUp']);
  }

  public signIn(guest: ICustomerModel) {
    this.customerService.signIn(guest);
  }

  public showNotification() {
    this.notification = "You have sign in success!";
  }

}
