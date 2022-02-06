function getRating(driver) {
  return moreThanFiveLateDliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

// 함수 인라인 하기 적용
// 함수 본문이 함수 이름만큼 명확한 경우
function getRating(driver) {
  return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}