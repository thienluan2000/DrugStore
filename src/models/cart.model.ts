import { IProductModel } from "./product.model";

export interface ICartModel {
  quantity : number,
  totalPrice : number,
  children : IProductModel[]
}
