class Order {
  constructor(quantity, item) {
    this._qunatity = quantity;
    this._item = item;
  }

  get price() {
    let basePrice = this._qunatity * this._item.price;
    let discountFactor = 0.98;

    if (basePrice > 1000) {
      discountFactor -= 0.03;
    }

    return basePrice * discountFactor;
  }
}