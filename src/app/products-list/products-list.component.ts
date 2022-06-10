import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: IProductModel[] = [];
  public selectedPage: number = 1;
  public pageSize: number = 8;
  public currentProduct: IProductModel | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('key'));
    const searchKeywords = this.route.snapshot.queryParamMap.get('key');
    console.log(searchKeywords);

    this.productService.getList(searchKeywords).subscribe(res => {
      console.log();
      this.products = (res || []);
      this.products.sort((a: IProductModel, b: IProductModel) => a.price - b.price);
    });
  }

}
