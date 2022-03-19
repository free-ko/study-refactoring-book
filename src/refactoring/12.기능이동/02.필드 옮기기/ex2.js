class Acount {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

class AcountType {
  constructor(nameString) {
    this._name = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}