import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from 'src/models/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  @Input() product!: IProductModel;
  public products: IProductModel[] = [];
  public currentProduct: IProductModel | null = null;

  @Input('productList') set Data(value: IProductModel[]) {
    if (value && value.length > 0) {
      this.products = value.sort((a: IProductModel, b: IProductModel) => a.price - b.price);
    }
  }

  @Output() onProductSelected!: EventEmitter<IProductModel>;
  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onClicked(product: IProductModel): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
}

}
