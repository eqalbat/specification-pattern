export class Product {
  constructor(price, name) {
    this._price = price
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  static get name() {
    return c => c._name
  }
  static get info() {
    return c => ({ name: c._name, price: c._price });
  }
}

export default Product;