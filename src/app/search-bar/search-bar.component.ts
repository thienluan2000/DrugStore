import { Component, Input, OnInit } from '@angular/core';
import { IProductModel } from '../../models/product.model';
import { ProductService } from 'src/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() productList!: IProductModel[];
  public searchKeywords!: string;

  constructor(
    private productService: ProductService,
    private router: Router) {
  }
  ngOnInit(): void {

  }

  public doSearch() {
    // this.productService.getGlobalSearchList(this.searchKeywords);
    this.router.navigate(['/'], { queryParams: { key: this.searchKeywords } });
  }

  refresh(): void {
    //window.location.reload();
    if(window.location.pathname == '/')
    {
      window.location.reload();
    }
  }

}
