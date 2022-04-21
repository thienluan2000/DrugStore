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

  //pagination parameters
  p: number = 1;
  count: number = 9;


  constructor(){
    this.products=[
      new Product(
        'Kit test covid',
        '/assets/images/kittest.jpg',
        5,
        ['Medical instruments','Kittest']
        ),
      new Product(
        'Mask Famapro VN95',
        '/assets/images/mask.jpg',
        1,
        ['Mask','Medical mask type 1']
        ),
      new Product(
        'Siro Prospan',
        '/assets/images/siro.jpg',
        10,
        ['Medicine','Cough medicine']
        ),
      new Product(
        'Aspirin',
        '/assets/images/aspirin.jpg',
        4,
        ['Medicine','Headache medicine']
        ),
      new Product(
        'Eugica',
        '/assets/images/eugica.jpg',
        7,
        ['Medicine','Cough medicine']
        ),
      new Product(
        'Eve Quick',
        '/assets/images/eve.jpg',
        4,
        ['Medicine','Headache medicine']
        ),
      new Product(
        'Panadol Extra',
        '/assets/images/panadol.jpg',
        6,
        ['Medicine','Headache medicine']
        ),
      new Product(
        'Paracetamol',
        '/assets/images/paracetamol.jpg',
        8,
        ['Medicine','Headache medicine']
        ),
      new Product(
        'Berberin',
        '/assets/images/berberin.jpg',
        6,
        ['Medicine','Stomach medicine']
        ),
      new Product(
        'Berocca',
        '/assets/images/berocca.jpg',
        7,
        ['Food Supplement','effervescent medicine']
        ),
      new Product(
        'Loperamid',
        '/assets/images/loperamid.jpg',
        5,
        ['Medicine','Stomach medicine']
        ),
      new Product(
        'My VIta',
        '/assets/images/myvita.jpg',
        3,
        ['Food Supplement','effervescent medicine']
        ),
      new Product(
        'Strepsils',
        '/assets/images/strepsils.jpg',
        2,
        ['Food Supplement','lozenges']
        ),
      new Product(
        'Vitamin C lozenges',
        '/assets/images/vitaminC.jpg',
        2,
        ['Food Supplement','lozenges']
        ),
      new Product(
        'GMask',
        '/assets/images/gmask.jpg',
        1,
        ['Mask','Medical mask type 2']
        ),
      new Product(
        'Busrel Mask',
        '/assets/images/busrelmask.jpg',
        1,
        ['Mask','Medical mask type 1']
        ),
      new Product(
        'Urevo Mask',
        '/assets/images/urevomask.jpg',
        1,
        ['Mask','Medical mask type 2']
        ),
      new Product(
        'Wheel chair black',
        '/assets/images/wheelchair.jpg',
        100,
        ['Medical Instruments','Wheel chair type 1']
        ),
      new Product(
        'Needle',
        '/assets/images/needle.jpg',
        3,
        ['Medical Instruments','Neelde type 1']
        ),
       new Product(
        'Wood Crutch',
        '/assets/images/crutch.jpg',
        3,
        ['Medical Instruments','Crutch']
        ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
    }
}

