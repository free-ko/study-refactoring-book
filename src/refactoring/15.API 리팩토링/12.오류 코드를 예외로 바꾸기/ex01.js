function localShippingRules(country) {
  const status = calculateShippingCosts(orderData);
  if (status < 0) errorList.push({ order: orderData, errorCode: status });

  const data = countryData.shippingRules[country];

  if (data) return new ShippingRules(data);
  else return -23;
}

function calculateShippingCosts(anOrder) {
  // 관련없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) return shippingRules; // 오류 전파

  // 더 관련없는 코드
}