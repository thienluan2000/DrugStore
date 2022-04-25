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
        1,
        'Kit test covid',
        '/assets/images/kittest.jpg',
        5,
        ['Medical instruments','Kittest']
        ),
      new Product(
        2,
        'Mask Famapro VN95',
        '/assets/images/mask.jpg',
        1,
        ['Mask','Medical mask type 1']
        ),
      new Product(
        3,
        'Siro Prospan',
        '/assets/images/siro.jpg',
        10,
        ['Medicine','Cough medicine']
        ),
      new Product(
        4,
        'Aspirin',
        '/assets/images/aspirin.jpg',
        4,
        ['Medicine','Headache medicine']
        ),
      new Product(
        5,
        'Eugica',
        '/assets/images/eugica.jpg',
        7,
        ['Medicine','Cough medicine']
        ),
      new Product(
        6,
        'Eve Quick',
        '/assets/images/eve.jpg',
        4,
        ['Medicine','Headache medicine']
        ),
      new Product(
        7,
        'Panadol Extra',
        '/assets/images/panadol.jpg',
        6,
        ['Medicine','Headache medicine']
        ),
      new Product(
        8,
        'Paracetamol',
        '/assets/images/paracetamol.jpg',
        8,
        ['Medicine','Headache medicine']
        ),
      new Product(
        9,
        'Berberin',
        '/assets/images/berberin.jpg',
        6,
        ['Medicine','Stomach medicine']
        ),
      new Product(
        10,
        'Berocca',
        '/assets/images/berocca.jpg',
        7,
        ['Food Supplement','effervescent medicine']
        ),
      new Product(
        11,
        'Loperamid',
        '/assets/images/loperamid.jpg',
        5,
        ['Medicine','Stomach medicine']
        ),
      new Product(
        12,
        'My VIta',
        '/assets/images/myvita.jpg',
        3,
        ['Food Supplement','effervescent medicine']
        ),
      new Product(
        13,
        'Strepsils',
        '/assets/images/strepsils.jpg',
        2,
        ['Food Supplement','lozenges']
        ),
      new Product(
        14,
        'Vitamin C lozenges',
        '/assets/images/vitaminC.jpg',
        2,
        ['Food Supplement','lozenges']
        ),
      new Product(
        15,
        'GMask',
        '/assets/images/gmask.jpg',
        1,
        ['Mask','Medical mask type 2']
        ),
      new Product(
        16,
        'Busrel Mask',
        '/assets/images/busrelmask.jpg',
        1,
        ['Mask','Medical mask type 1']
        ),
      new Product(
        17,
        'Urevo Mask',
        '/assets/images/urevomask.jpg',
        1,
        ['Mask','Medical mask type 2']
        ),
      new Product(
        18,
        'Wheel chair black',
        '/assets/images/wheelchair.jpg',
        100,
        ['Medical Instruments','Wheel chair type 1']
        ),
      new Product(
        19,
        'Needle',
        '/assets/images/needle.jpg',
        3,
        ['Medical Instruments','Neelde type 1']
        ),
       new Product(
         20,
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

