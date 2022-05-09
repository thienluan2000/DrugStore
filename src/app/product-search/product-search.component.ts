import { Component, OnInit, Input, Output } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  @Input() product!: IProductModel;
  @Input() productList!: IProductModel[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {


  }
  public getGlobalSearchList(keyword: string) {
    this.productList = [];
    this.productService.getProductList().subscribe(value => {
        this.productList = value.filter((v) => v.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
    });
    console.log(this.productList);
    return this.productList;
}



}
