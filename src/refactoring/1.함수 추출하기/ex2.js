// 유효 범위를 벗어나는 변수가 없을 때

// 리팩토링 전
function printOwing(invoice) {
  let outstanding = 0;

  console.log('**********')
  console.log('***고객채무***')
  console.log('**********')

  // 미해결 채무(outstanding)을 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)을 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

  // 세부 사항을 출력한다.
  console.log(`고객명: ${invoice.customer}`)
  console.log(`채무액: ${outstanding}`)
  console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`)
}

// 리팩토링 후
function printOwing(invoice) {
  printBanner()
  const outstanding = calculateOutstanding(invoice)
  recordDueDate(invoice)
  printDetails(invoice, outstanding)
}

function printBanner() {
  console.log('**********')
  console.log('***고객채무***')
  console.log('**********')
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`)
  console.log(`채무액: ${outstanding}`)
  console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`)
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result
}

