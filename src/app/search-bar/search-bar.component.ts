import { Component, Input, OnInit } from '@angular/core';
import { IProductModel } from '../../models/product.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() productList!: IProductModel[];
    searchKeywords!: string;

    constructor(private route: ActivatedRoute,
        private productService: ProductService,
        private router: Router) {
    }


    ngOnInit(): void {

        //  this.getGlobalSearchList('');

    }

    public getGlobalSearchList(keyword: string) {
        this.productList = [];
        this.productService.getProductList().subscribe(value => {
            this.productList = value.filter((v) => v.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        });
        console.log(this.productList);
    }

    public doSearch() {
        this.getGlobalSearchList(this.searchKeywords);
    }

}
