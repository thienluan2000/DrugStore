import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'drugstore-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DrugStore';
  products : Product[];

  constructor(){
    this.products=[
      new Product(
        'Kit test covid',
        '/assets/images/kittest.jpg',
        5,
        ['Medical instruments','Kittest']
        ),
      new Product(
        'Medical mask type 1',
        '/assets/images/mask.jpg',
        1,
        ['Mask','Medical mask type 1']
        ),
      new Product(
        'Siro Prospan',
        '/assets/images/siro.jpg',
        10,
        ['Medicine','Siro']
        )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
    }
}

