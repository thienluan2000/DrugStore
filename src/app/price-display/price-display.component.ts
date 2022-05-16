import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  template:  `<div class="price-display">Price of Product : \{{ price }}$</div>  `}
)
export class PriceDisplayComponent  {
  @Input() price!: number;
  constructor() { }

}
