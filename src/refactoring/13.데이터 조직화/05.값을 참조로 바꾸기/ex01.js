class Other {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

export function initialize() {
  _repoitoryData = {};
  _repoistoryData.customers = new Map();
}

export function registerCustomer(id) {
  if (!_repoistoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new Customer(id));
  }

  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}