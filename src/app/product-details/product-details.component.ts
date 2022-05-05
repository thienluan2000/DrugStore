import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { IProductModel } from '../../models/product.model';
@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',

})
export class ProductDetailsComponent implements OnInit {
    public product!: IProductModel | null;
    public currentProduct: IProductModel | null = null;

    //@HostBinding('attr.class') cssClass = 'item';

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService) { }

    ngOnInit(): void {


        // First get the product id from the current route.

        const routeParams = this.route.snapshot.paramMap;
        const productId = Number(routeParams.get('productId'));

        // Find the product that correspond with the id provided in route.
        // this.product = this.productList.find(product => product.id === productIdFromRoute);

        this.productService.getProductDetail(productId).subscribe(res => {
            console.log(res);
            this.currentProduct = res;
        });
    }

}