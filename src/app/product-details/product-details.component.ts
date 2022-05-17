import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { IProductModel } from '../../models/product.model';
import { CartService } from 'src/services/cart.service';
@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    public selectedProduct: IProductModel | null = null;


    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private cartService : CartService) { }

    ngOnInit(): void {


        // First get the product id from the current route.

        const productId = Number(this.route.snapshot.paramMap.get('productId'));

        // Find the product that correspond with the id provided in route.

        this.productService.getProductDetail(productId).subscribe(res => {
            console.log(res);
            this.selectedProduct = res;
        });
    }

      addToCart(selectedProduct: IProductModel) {
        this.productService.addToCart(selectedProduct);
        window.alert('Your product has been added to the cart!');

      }

}
