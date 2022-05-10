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
  public product!: IProductModel;
  @Input() productList!: IProductModel[];

  constructor(
    private productService: ProductService
  ) {

  }

  ngOnInit(): void {


  }



}
