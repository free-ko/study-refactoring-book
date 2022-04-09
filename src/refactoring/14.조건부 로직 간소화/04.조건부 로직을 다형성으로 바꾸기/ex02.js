// 변형 동작을 다형성으로 표현하기

function rating(voyage, history) { // 투자 등급
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);

  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  } else {
    return 'B';
  }
}

function voyageRisk(voyage) { // 항해 경로 위험요소
  let result = 1;

  if (voyage.length > 4) {
    return result += 2;
  }

  if (voyage.length > 8) {
    return result += voyage.length - 8;
  }

  if (["중국", "동인도"].includes(voyage.zone)) {
    return result += 4;
  }

  return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;

  if (history.length < 5) {
    return result += 4;
  }

  result += history.filter(v => v.profit < 0).length;

  if (voyage.zone === '중국' && hasChina(history)) {
    return result -= 2;
  }

  return Math.max(result, 0);
}

function hasChina(history) { // 중국을 경유하는가?
  return history.some(v => "중국" === v.zone);
}