import { Component, Input, HostBinding } from '@angular/core';
import { IProductModel } from '../../models/product.model';

@Component({
    selector: 'product-image',
    templateUrl: './product-image.component.html',
})
export class ProductImageComponent {
    @Input() product!: IProductModel;
    @HostBinding('attr.class') cssClass = 'ui small image';

    constructor() { }

    ngOnInit(): void {
    }

}
