function calculatorSumberDiscount(aDate) {
  return charge = summer() ? summerCharge() : regularCharge();

  function summer() {
    return !aDate.isBefore(paln.summerStart) && !aDate.isAfter(paln.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
