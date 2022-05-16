import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProductModel } from 'src/models/product.model';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class ProductService {
    @Input() productList!: IProductModel[];
    public products: IProductModel[];
    //public product: IProductModel;
    private baseImgUrl: string = '/assets/images';

    constructor(
        private http: HttpClient, private route: ActivatedRoute
    ) {
        this.products = [
            {
                id: 1,
                name: 'Kit test covid',
                imageUrl: `${this.baseImgUrl}/kittest.jpg`,
                price: 5,
                classify: ['Medical instruments', 'Kittest'],
                des : 'This is kit test covid From USA'
            },
            {
                id: 2,
                name: 'Mask Famapro VN95',
                imageUrl: `${this.baseImgUrl}/mask.jpg`,
                price: 1,
                classify: ['Mask', 'Medical mask type 1'],
                des : 'sdsdsdsdasdsdasdasdasdas '
            },
            {
                id: 3,
                name: 'Siro Prospan',
                imageUrl: `${this.baseImgUrl}/siro.jpg`,
                price: 10,
                classify: ['Medicine', 'Cough medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 4,
                name: 'Aspirin',
                imageUrl: `${this.baseImgUrl}/aspirin.jpg`,
                price: 4,
                classify: ['Medicine', 'Headache medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 5,
                name: 'Eugica',
                imageUrl: `${this.baseImgUrl}/eugica.jpg`,
                price: 7,
                classify: ['Medicine', 'Cough medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 6,
                name: 'Eve Quick',
                imageUrl: `${this.baseImgUrl}/eve.jpg`,
                price: 4,
                classify: ['Medicine', 'Headache medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 7,
                name: 'Panadol Extra',
                imageUrl: `${this.baseImgUrl}/panadol.jpg`,
                price: 6,
                classify: ['Medicine', 'Headache medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 8,
                name: 'Paracetamol',
                imageUrl: `${this.baseImgUrl}/paracetamol.jpg`,
                price: 8,
                classify: ['Medicine', 'Headache medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 9,
                name: 'Berberin',
                imageUrl: `${this.baseImgUrl}/berberin.jpg`,
                price: 6,
                classify: ['Medicine', 'Stomach medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 10,
                name: 'Berocca',
                imageUrl: `${this.baseImgUrl}/berocca.jpg`,
                price: 7,
                classify: ['Food Supplement', 'effervescent medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 11,
                name: 'Loperamid',
                imageUrl: `${this.baseImgUrl}/loperamid.jpg`,
                price: 5,
                classify: ['Medicine', 'Stomach medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 12,
                name: 'My VIta',
                imageUrl: `${this.baseImgUrl}/myvita.jpg`,
                price: 3,
                classify: ['Food Supplement', 'effervescent medicine'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 13,
                name: 'Strepsils',
                imageUrl: `${this.baseImgUrl}/strepsils.jpg`,
                price: 2,
                classify: ['Food Supplement', 'lozenges'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 14,
                name: 'Vitamin C lozenges',
                imageUrl: `${this.baseImgUrl}/vitaminC.jpg`,
                price: 2,
                classify: ['Food Supplement', 'lozenges'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 15,
                name: 'GMask',
                imageUrl: `${this.baseImgUrl}/gmask.jpg`,
                price: 1,
                classify: ['Mask', 'Medical mask type 2'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 16,
                name: 'Busrel Mask',
                imageUrl: `${this.baseImgUrl}/busrelmask.jpg`,
                price: 1,
                classify: ['Mask', 'Medical mask type 1'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 17,
                name: 'Urevo Mask',
                imageUrl: `${this.baseImgUrl}/urevomask.jpg`,
                price: 1,
                classify: ['Mask', 'Medical mask type 2'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 18,
                name: 'Wheel chair black',
                imageUrl: `${this.baseImgUrl}/wheelchair.jpg`,
                price: 100,
                classify: ['Medical Instruments', 'Wheel chair type 1'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 19,
                name: 'Needle',
                imageUrl: `${this.baseImgUrl}/needle.jpg`,
                price: 3,
                classify: ['Medical Instruments', 'Neelde type 1'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            },
            {
                id: 20,
                name: 'Wood Crutch',
                imageUrl: `${this.baseImgUrl}/crutch.jpg`,
                price: 3,
                classify: ['Medical Instruments', 'Crutch'],
                des : 'sdsdsdsdasdsdasdasdasdas'
            }
        ];
    }

    public getProductList(): Observable<IProductModel[]> {
        // return this.http.get<IProductModel[]>(`/products`);
        return of(this.products);

    }

    public getProductDetail(id: number): Observable<IProductModel | null> {
        const item: IProductModel | null = (this.products.find(x => x.id === id) || null);
        return of(item);

    }

    public getGlobalSearchList(keyword: string) {
        this.productList = [];
        this.getProductList().subscribe(value => {
            this.productList = value.filter((v) => v.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        });
        console.log(this.productList);
        return of(this.productList);
    }

    public getList(keyword: string | null): Observable<IProductModel[]> {
        
        if (keyword === null || keyword === '') {
            return of(this.products);
        }
        else {
            // this.productList = [];
            // this.getProductList().subscribe(value => {
            //     this.productList = value.filter((v) => v.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
            // });
            const products = this.products.filter((v) => v.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
            return of(products);
        }
    }

}


