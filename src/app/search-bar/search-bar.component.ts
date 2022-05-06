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
    //name!: string;
    // results!: Object | null;
    @Input() productList!: IProductModel[];

    searchKeywords!: string;

    constructor(private route: ActivatedRoute,
        private productService: ProductService,
        private router: Router) {
        // this.route
        //     .queryParams
        //     .subscribe(params => { this.name = params['name'] || ''; });
    }


    ngOnInit(): void {

        // const routeParams = this.route.snapshot.paramMap;
        // const productName = String(routeParams.get('productName'));

        // this.productService.searchProduct(productName).subscribe(res => {
        //     console.log(res);
        //     this.currentProduct = res;
        // });


        //this.search();
        this.getGlobalSearchList('');

    }

    public getGlobalSearchList(type: string) {
        this.productList = [];
        this.productService.getProductList().subscribe(value => {
            let data = [];
            data = value.data;
            console.log(data);
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].type === type) {
                    this.productList.push(data[i]);
                }
            }
        });
    }
    // submit(name: string): void {
    //     this.router.navigate(['search'], { queryParams: { name: name } })
    //         .then(_ => this.search());
    // }

    // search(): void {
    //     console.log('this.name', this.name);
    //     if (!this.name) {
    //         return;
    //     }

    //     this.productService
    //         .searchProduct(this.name)
    //         .subscribe((res: any) => this.renderResults(res));
    // }

    // renderResults(res: any): void {
    //     this.results = null;
    //     if (res && res.tracks && res.tracks.items) {
    //         this.results = res.tracks.items;
    //     }
    // }


}
