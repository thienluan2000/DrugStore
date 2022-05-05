import { Component, Input, OnInit } from '@angular/core';
import { IProductModel } from '../../models/product.model';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() productList!: IProductModel[];

    searchedKeyword!: string;

    constructor(private route: ActivatedRoute,
        private productService: ProductService) {

    }


    ngOnInit(): void {

        const routeParams = this.route.snapshot.paramMap;
        const productName = String(routeParams.get('productName'));

        this.productService.searchProduct(productName).subscribe(res => {
            console.log(res);
            //this.currentProduct = res;
        });
    }

}
