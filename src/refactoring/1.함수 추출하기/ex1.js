// 리팩토링 전
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  // 세부 사항 출력
  console.log(`고객명 : ${invoice.coustomer}`)
  console.log(`채무액 : ${outstanding}`)
}

// 리팩토링 후
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  // 세부 사항 출력
  function printDetails(outstanding) {
    console.log(`고객명 : ${invoice.coustomer}`)
    console.log(`채무액 : ${outstanding}`)
  }
}