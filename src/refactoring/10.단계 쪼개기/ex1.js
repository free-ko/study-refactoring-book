const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")][1];
const orderPrice = parseInt(orderData[1]) * productPrice

// 단계 쪼개기
const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
  const values = aString.split(/\s+/);

  return ({
    prdouctID: values[0].split("-")[1],
    quantity: parseInt(values[1],
    )
  })
}

function price(order, priceList) {
  return order.quantity * priceList[order.prdouctID]
}