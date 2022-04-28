import { Component, Input } from '@angular/core';
import { IProductModel } from '../../models/product.model';

@Component({
    selector: 'product-classify',
    templateUrl: './product-classify.component.html',
    styleUrls: ['./product-classify.component.scss']
})
export class ProductClassifyComponent {
    @Input() product!: IProductModel;
    constructor() { }

    ngOnInit(): void {
    }
}
