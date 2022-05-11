import { Component, Input } from '@angular/core';
import { IProductModel } from '../../models/product.model';

@Component({
    selector: 'product-col',
    templateUrl: './product-col.component.html',
    styleUrls: ['./product-col.component.scss']
})
export class ProductColComponent {
    @Input() product!: IProductModel|null;

    constructor() { }


}
