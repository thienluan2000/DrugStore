export class Product{
    constructor(
        public id : number,
        public name : string ,
        public imageUrl : string,
        public price : number,
        public classify : string[]
    ){}
}