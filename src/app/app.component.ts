import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { IProductModel } from '../models/product.model';

@Component({
    selector: 'drugstore-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = 'DrugStore';
    public products: IProductModel[] = [];

    //pagination parameters
    public selectedPage: number = 1;
    public pageSize: number = 8;

    constructor(
        private productService: ProductService
    ) {

    }

    ngOnInit(): void {
        this.productService.getProductList().subscribe(res => {
            this.products = res;
        });
    }

    public onProductSelected(product: IProductModel): void {
        console.log('Product clicked: ', product);
    }

    public getProductList() {

    }
}

