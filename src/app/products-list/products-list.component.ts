import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from '../../models/product.model';
@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
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

    public onClicked(product: IProductModel): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    
}
