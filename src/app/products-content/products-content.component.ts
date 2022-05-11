import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private productService: ProductService, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    // this.productService.getProductList().subscribe(res => {
    //   this.products = res;
    // });


    console.log(this.route.snapshot.queryParamMap.get('key'));
    const searchKeywords = this.route.snapshot.queryParamMap.get('key');
    console.log(searchKeywords);

    this.productService.getList(searchKeywords).subscribe(res => {
      console.log();
      this.products = res;
    });

  }

  public onProductSelected(product: IProductModel): void {
    console.log('Product clicked: ', product);
  }
}
