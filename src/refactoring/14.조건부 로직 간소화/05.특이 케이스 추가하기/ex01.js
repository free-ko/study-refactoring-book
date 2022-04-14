class Site {
  constructor() { }

  get customer() { return this._customer; }
}

class Customer {
  constructor() { }

  get name() { }

  get billingPlan() { }

  set billingPlan(arg) { }

  get paymentHistory() { }

  get isUnknown() { return false; }
}

class UnknownCustomer {
  get isUnknown() { return true; }
}

function isUnknown(arg) {
  if (!((arg instanceof Customer) || (arg === '미확인 고객'))) {
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  }

  return (arg === '미확인 고객');
}

// 클라이언트 1
let customerName;
const aCustomer = new Customer();

if (isUnknown(aCustomer)) {
  customerName = '거주자';
} else {
  customerName = aCustomer.name;
}

// 클라이언트 2
