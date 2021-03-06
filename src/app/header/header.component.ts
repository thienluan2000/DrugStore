import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public count  =  JSON.parse(localStorage.getItem('key') || '{}').length;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Click to back to homepage
  public homePage() {
    this.router.navigate(['']);
  }

}
