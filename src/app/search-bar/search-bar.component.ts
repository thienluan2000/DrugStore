import { Component, Input, OnInit } from '@angular/core';
import { IProductModel } from '../../models/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() productList!: IProductModel[];
    searchKeywords!: string;

    constructor(
        private productService: ProductService) {
    }


    ngOnInit(): void {


    }

    public doSearch() {
        this.productService.getGlobalSearchList(this.searchKeywords);
    }

}
