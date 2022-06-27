import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProductModel } from 'src/models/product.model';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class ProductService {
  public products: IProductModel[];
  private baseImgUrl: string = '/assets/images';

  constructor(
    private http: HttpClient, private route: ActivatedRoute
  ) {
    this.products = [
      {
        id: "MI1",
        name: 'Kit test covid',
        imageUrl: `${this.baseImgUrl}/kittest.jpg`,
        price: 5,
        classify: ['Medical Instruments', 'Kittest'],
        des: 'This is kit test covid From USA',
        quantity: 1,
        totalPrice: 5,
      },
      {
        id: "MA2",
        name: 'Mask Famapro VN95',
        imageUrl: `${this.baseImgUrl}/mask.jpg`,
        price: 1,
        classify: ['Mask', 'Medical mask type 1'],
        des: 'This is Mask Famapro VN95 From VietNam ',
        quantity: 1,
        totalPrice: 1,
      },
      {
        id: "ME3",
        name: 'Siro Prospan',
        imageUrl: `${this.baseImgUrl}/siro.jpg`,
        price: 10,
        classify: ['Medicine', 'Cough medicine'],
        des: 'This is Siro Prospan from vietnam',
        quantity: 1,
        totalPrice: 10,
      },
      {
        id: "ME4",
        name: 'Aspirin',
        imageUrl: `${this.baseImgUrl}/aspirin.jpg`,
        price: 4,
        classify: ['Medicine', 'Headache medicine'],
        des: 'Aspirin is a headache medicine',
        quantity: 1,
        totalPrice: 4,
      },
      {
        id: "ME5",
        name: 'Eugica',
        imageUrl: `${this.baseImgUrl}/eugica.jpg`,
        price: 7,
        classify: ['Medicine', 'Cough medicine'],
        des: 'This is Eugica from USA',
        quantity: 1,
        totalPrice: 7,
      },
      {
        id: "ME6",
        name: 'Eve Quick',
        imageUrl: `${this.baseImgUrl}/eve.jpg`,
        price: 4,
        classify: ['Medicine', 'Headache medicine'],
        des: 'This is evequick from USA',
        quantity: 1,
        totalPrice: 4,
      },
      {
        id: "ME7",
        name: 'Panadol Extra',
        imageUrl: `${this.baseImgUrl}/panadol.jpg`,
        price: 6,
        classify: ['Medicine', 'Headache medicine'],
        des: 'This is Headache medicine from USA',
        quantity: 1,
        totalPrice: 6,
      },
      {
        id: "ME8",
        name: 'Paracetamol',
        imageUrl: `${this.baseImgUrl}/paracetamol.jpg`,
        price: 8,
        classify: ['Medicine', 'Headache medicine'],
        des: 'This is Headache medicine from USA',
        quantity: 1,
        totalPrice: 8,
      },
      {
        id: "ME9",
        name: 'Berberin',
        imageUrl: `${this.baseImgUrl}/berberin.jpg`,
        price: 6,
        classify: ['Medicine', 'Stomach medicine'],
        des: 'This is Headache Stomach from USA',
        quantity: 1,
        totalPrice: 6,
      },
      {
        id: "FS10",
        name: 'Berocca',
        imageUrl: `${this.baseImgUrl}/berocca.jpg`,
        price: 7,
        classify: ['Food Supplement', 'effervescent medicine'],
        des: 'This is Effervesment medicine from USA',
        quantity: 1,
        totalPrice: 7,
      },
      {
        id: "ME11",
        name: 'Loperamid',
        imageUrl: `${this.baseImgUrl}/loperamid.jpg`,
        price: 5,
        classify: ['Medicine', 'Stomach medicine'],
        des: 'This is Stomach medicine from USA',
        quantity: 1,
        totalPrice: 5,
      },
      {
        id: "FS12",
        name: 'My VIta',
        imageUrl: `${this.baseImgUrl}/myvita.jpg`,
        price: 3,
        classify: ['Food Supplement', 'effervescent medicine'],
        des: 'This is effervescent medicine from USA',
        quantity: 1,
        totalPrice: 3,
      },
      {
        id: "FS13",
        name: 'Strepsils',
        imageUrl: `${this.baseImgUrl}/strepsils.jpg`,
        price: 2,
        classify: ['Food Supplement', 'lozenges'],
        des: 'This is lozenges from USA',
        quantity: 1,
        totalPrice: 2,
      },
      {
        id: "FS14",
        name: 'Vitamin C lozenges',
        imageUrl: `${this.baseImgUrl}/vitaminC.jpg`,
        price: 2,
        classify: ['Food Supplement', 'lozenges'],
        des: 'This is lozenges from USA',
        quantity: 1,
        totalPrice: 2,
      },
      {
        id: "MA15",
        name: 'GMask',
        imageUrl: `${this.baseImgUrl}/gmask.jpg`,
        price: 1,
        classify: ['Mask', 'Medical mask type 2'],
        des: 'This is Medical Mask Type 2 from USA',
        quantity: 1,
        totalPrice: 1,
      },
      {
        id: "MA16",
        name: 'Busrel Mask',
        imageUrl: `${this.baseImgUrl}/busrelmask.jpg`,
        price: 1,
        classify: ['Mask', 'Medical mask type 1'],
        des: 'This is Medical Mask Type 1 from USA',
        quantity: 1,
        totalPrice: 1,
      },
      {
        id: "MA17",
        name: 'Urevo Mask',
        imageUrl: `${this.baseImgUrl}/urevomask.jpg`,
        price: 1,
        classify: ['Mask', 'Medical mask type 2'],
        des: 'This is Medical Mask Type 2 from USA',
        quantity: 1,
        totalPrice: 1,
      },
      {
        id: "MI18",
        name: 'Wheel chair black',
        imageUrl: `${this.baseImgUrl}/wheelchair.jpg`,
        price: 100,
        classify: ['Medical Instruments', 'Wheel chair type 1'],
        des: 'this is Wheel chair black',
        quantity: 1,
        totalPrice: 100,
      },
      {
        id: "MI19",
        name: 'Needle',
        imageUrl: `${this.baseImgUrl}/needle.jpg`,
        price: 3,
        classify: ['Medical Instruments', 'Neelde type 1'],
        des: 'This is a needle',
        quantity: 1,
        totalPrice: 3,
      },
      {
        id: "MI20",
        name: 'Wood Crutch',
        imageUrl: `${this.baseImgUrl}/crutch.jpg`,
        price: 3,
        classify: ['Medical Instruments', 'Crutch'],
        des: 'This is wood Crutch',
        quantity: 1,
        totalPrice: 3,
      }
    ];
  }

  public getProductDetail(id: String): Observable<IProductModel | null> {
    const item: IProductModel | null = (this.products.find(x => x.id === id) || null);
    return of(item);

  }


  public getList(keyword: string | null, typeId: string | null): Observable<IProductModel[]> {
    if (keyword === null || keyword === '' && typeId === null || typeId === '') {
      console.log(keyword, typeId)
      return of(this.products);
    }
    if (typeId != null || typeId != '' && keyword === null || keyword === '') {
      const products = this.products.filter((v) => v.classify.indexOf(typeId!) > -1);
      console.log(keyword, typeId);
      return of(products);
    }
    else {
      const products = this.products.filter((v) => v.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
      console.log(keyword, typeId);
      return of(products);
    }
  }

}


