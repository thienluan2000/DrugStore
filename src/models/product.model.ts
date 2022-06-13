import { ICartModel } from "./cart.model";

export interface IProductModel extends ICartModel {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  classify: string[],
  des: string,

}
