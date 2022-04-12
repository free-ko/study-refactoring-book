const voyage = { zone: "서인도", length: 10 };

const history = [
  { zone: "동인도", profit: 5 },
  { zone: "서인동", profit: 15 },
  { zone: "중국", profit: -2 },
  { zone: "서아프리카", profit: 7 },
];
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

    result += this.historyLengthFactor;
    result += this.voyageLengthFactor;
    return result;
  }

  get voyageLengthFactor() {
    return (this.voyage.length > 14) ? -1 : 0;
  }

  get voyageAndHistoryLengthFactor() {
    let result = 0;

    if (this.voyage.length > 14) result -= 1;

    return result;
  }

  get historyLengthFactor() {
    return (this.history.length > 8) ? 1 : 0;
  }

  get hasChina() {
    return history.some(v => "중국" === v.zone);
  }
}
class ExperincedChinaRating extends Rating {
  get voyageLengthFactor() {
    let result = 0;
    result += 3;

    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;

    return result;
  }

  get historyLengthFactor() {
    return (this.history.length > 10) ? 1 : 0;
  }
}

