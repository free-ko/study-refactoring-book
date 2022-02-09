function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VI", "NH", "RI"].includes(aCustomer.address.state);
}