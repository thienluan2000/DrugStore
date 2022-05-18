import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  template: `<div class="price-display" style="font-weight: bold; color:rgb(7, 158, 45)"> \{{ price }} $</div> `
},
)
export class PriceDisplayComponent {
  @Input() price!: number;
  constructor() { }

}
