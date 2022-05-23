import { IProductModel } from "./product.model";

export interface ICartModel extends IProductModel{
  quantity : number,
  totalPrice : number,
}
