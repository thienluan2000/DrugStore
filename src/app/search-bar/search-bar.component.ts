import { Component, Input } from '@angular/core';
import { IProductModel } from '../../models/product.model';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
    @Input() productList!: IProductModel[];

    searchedKeyword!: string;
    
    constructor() {

    }

    ngOnInit(): void {
    }

}
