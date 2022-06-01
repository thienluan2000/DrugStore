import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  customer! : Customer;
  constructor() { }

  ngOnInit(): void {
    this.customer = new Customer('das','sda','sda','sda','sda',);
  }


}
