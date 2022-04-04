function payAmount(employee) {
  if (employee.isSeparted) {  // 퇴사한 직원 인가?
    return { amount: 0, reasonCode: "SEP" };
  }

  if (employee.isRetired) {  // 은퇴한 직원 인가?
    return { amount: 0, reasonCode: "RET" };
  }

  // 급여 계산 로직
  lorem.ipsum(dolor.sitAmet);
  consectetur(adipiscing).elit();
  setImmediate.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);
  return someFinalComputation();

}

