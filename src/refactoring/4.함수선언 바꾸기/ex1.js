function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VI", "NH", "RI"].includes(aCustomer.address.state);
}

// 호출
const newEnglanders = somCustomers.filter((c) => inNewEngland(c));



// 리팩토링 후
function inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VI", "NH", "RI"].includes(stateCode);
}

// 호출
const newEnglanders = somCustomers.filter((c) => inNewEngland(c.address.state));
