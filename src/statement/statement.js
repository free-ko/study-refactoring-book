export default function statement(invoice, plays) {
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    let result = 0;

    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }

    return result;
  }

  function volumeCreditsFor(aPerformance) {
    let results = 0;
    results += Math.max(aPerformance.audience - 30, 0);

    if ("comedy" === playFor(aPerformance).type) {
      results += Math.floor(aPerformance.audience / 5);
    }

    return results;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function totalVolumeCredits() {
    let volumeCredits = 0;

    for (const perf of invoice[0].performance) {
      volumeCredits += volumeCreditsFor(perf);
    }

    return volumeCredits;
  }

  let totalAmount = 0;
  let result = `청구 내역(고객명 : ${invoice[0].customer})\n`;

  for (const perf of invoice[0].performance) {
    // 청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += amountFor(perf);
  }

  result += `총액: ${usd(totalAmount / 100)}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;

  return result;
}
