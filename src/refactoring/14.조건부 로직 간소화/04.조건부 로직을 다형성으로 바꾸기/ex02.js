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
    result += 4;
  }

  result += history.filter(v => v.profit < 0).length;

  if (voyage.zone === '중국' && hasChina(history)) {
    result -= 2;
  }

  return Math.max(result, 0);
}

function hasChina(history) { // 중국을 경유하는가?
  return history.some(v => "중국" === v.zone);
}

function voyageProfitFactor(voyage, history) { // 수익 요인
  let result = 2;

  if (voyage.zone === "중국") {
    return result += 1;
  }

  if (voyage.zone === '동인도') {
    return result += 1;
  }

  if (voyage.zone === "중국" && hasChina(history)) {
    result += 3;

    if (history.length > 10) {
      result += 1;
    }

    if (history.length > 12) {
      result += 1;
    }

    if (history.length > 18) {
      result -= 1;
    }
  } else {
    if (history.length > 8) {
      result += 1;

    }

    if (voyage.length > 14) {
      result -= 1;
    }
  }

  return result;
}

const voyage = { zone: "서인도", length: 10 };
const history = [
  { zone: "동인도", profit: 5 },
  { zone: "서인동", profit: 15 },
  { zone: "중국", profit: -2 },
  { zone: "서아프리카", profit: 7 },
];


// 클래스로 리팩토링
function rating(voyage, history) {
  return createRating(voyage, history).value;
}

function createRating(voyage, history) {
  if (voyage.zone === "중국" && history.some(v => "중국" === v.zone)) {
    return new ExperincedChinaRating(voyage, history);
  }
  return new Rating(voyage, history);
}

class Rating { // 함수를 Rating 클래스로 묶음
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);

    if (vpf * 3 > (vr + chr * 2)) {
      return 'A';
    } else {
      return 'B';
    }
  }

  get voyageRisk() {
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

  get captainHistoryRisk() {
    let result = 1;

    if (history.length < 5) {
      result += 4;
    }

    result += history.filter(v => v.profit < 0).length;

    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;

    if (voyage.zone === "중국") {
      return result += 1;
    }

    if (voyage.zone === '동인도') {
      return result += 1;
    }

    if (this.voyage.zone === "중국" && this.hasChinaHistory) {
      result += 3;

      if (this.history.length > 10) {
        result += 1;
      }

      if (this.history.length > 12) {
        result += 1;
      }

      if (this.history.length > 18) {
        result -= 1;
      }
    } else {
      if (this.history.length > 8) {
        result += 1;

      }

      if (this.voyage.length > 14) {
        result -= 1;
      }
    }

    return result;
  }

  get hasChina() {
    return history.some(v => "중국" === v.zone);
  }
}

class ExperincedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }
}

