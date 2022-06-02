export class ICustomerModel {
  constructor(
    public username: string,
    public password: string,
    public email: string,
    public phonenumber: string,
    public address: string,
  ) { }
}

// export interface ICustomerModel {
//   username: string,
//   password: string,
//   email: string,
//   phonenumber: string,
//   address: string,
// }
