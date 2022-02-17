const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// 클라이언트
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge
const taxableCharge = aReading.taxableCharge

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year))
  return result;
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity
}

// 테스트 코드
it('check reading unchanged', function () {
  const baseReading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
  const oracle = _.cloneDeep(baseReading);
  enrichReading(baseReading);
  assert.deepEqual(baseReading, oracle);
})