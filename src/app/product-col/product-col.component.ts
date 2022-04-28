import { Component, Input, HostBinding } from '@angular/core';
import { IProductModel } from '../../models/product.model';

@Component({
    selector: 'product-col',
    templateUrl: './product-col.component.html',
})
export class ProductColComponent {
    @Input() product!: IProductModel;
    @HostBinding('attr.class') cssClass = 'item';

    constructor() { }

}
