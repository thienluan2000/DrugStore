import { Component, Input, OnInit } from '@angular/core';
import { IProductModel } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public searchKeywords: string = '';

  constructor(
    private router: Router) {
  }
  ngOnInit(): void {

  }

  public doSearch() {
    const canReload = (window.location.pathname === '/');
    this.router.navigate(['/'], { queryParams: (this.searchKeywords ? { key: this.searchKeywords } : undefined) }).then(() => {
      this.searchKeywords = '';

      if (canReload) {
        window.location.reload();
      }
    });

  }

}
