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
  public products: IProductModel[] = [];
  public currentProduct: IProductModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {


    this.productService.getProductList().subscribe(res => {
      console.log(res);
      this.currentProduct = res;
  });
  }



}
