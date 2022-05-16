import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  template:  `<div class="price-display" style="font-weight: bold; color:green"> \{{ price }} $</div> `},
)
export class PriceDisplayComponent  {
  @Input() price!: number;
  constructor() { }

}
