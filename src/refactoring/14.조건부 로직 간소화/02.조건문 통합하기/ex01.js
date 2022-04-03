function disabilityAmount(anEmployee) {
  if (anEmployee.seniority) return 0;
  if (anEmployee.monthDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;

  // 장애 수당 계산
}

// 리팩토링
function newDisabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) return 0;

  // 장애 수당 적용 여부 확인
  function isNotEligibleForDisability() {
    return (anEmployee.seniority < 2)
      || (anEmployee.monthDisabled > 12)
      || (anEmployee.isPartTime);
  }
}

