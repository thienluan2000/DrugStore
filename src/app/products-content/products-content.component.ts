import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';
@Component({
  selector: 'products-content',
  templateUrl: './products-content.component.html',
  styleUrls: ['./products-content.component.scss']
})
export class ProductsContentComponent implements OnInit {
  public products: IProductModel[] = [];
  //pagination parameters
  public selectedPage: number = 1;
  public pageSize: number = 8;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(res => {
      this.products = res;
    });

  

    
  }

  public onProductSelected(product: IProductModel): void {
    console.log('Product clicked: ', product);
  }
}
