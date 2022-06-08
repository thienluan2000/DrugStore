import { Component, OnInit, Input , Output,EventEmitter } from '@angular/core';
import { IProductModel } from 'src/models/product.model';
import { ProductService } from 'src/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() product!: IProductModel;
  public products: IProductModel[] = [];
  public selectedPage: number = 1;
  public pageSize: number = 8;
  public currentProduct: IProductModel | null = null;

  @Input('productList') set Data(value: IProductModel[]) {
    if (value && value.length > 0) {
      this.products = value.sort((a: IProductModel, b: IProductModel) => a.price - b.price);
    }
  }

  @Output() onProductSelected!: EventEmitter<IProductModel>;

  constructor(private productService: ProductService, private route: ActivatedRoute,) {
    this.onProductSelected = new EventEmitter();
   }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('key'));
    const searchKeywords = this.route.snapshot.queryParamMap.get('key');
    console.log(searchKeywords);

    this.productService.getList(searchKeywords).subscribe(res => {
      console.log();
      this.products = res;
    });

  }

  public onClicked(product: IProductModel): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
}



}
