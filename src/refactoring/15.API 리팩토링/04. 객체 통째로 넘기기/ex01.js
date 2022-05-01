// HeatingPlan 클래스
class HeatingPlan {
  withinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low) &&
      (aNumberRange.high <= this._temperatureRange.high);
  }
}

// 호출자
if (!aPlan.withinRange(aRoom.daysTempRange)) alerts.push('방 온도 지정 범위를 벗어났습니다.');


// 다른 경우
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(tempRange);
if (!isWithinRange) alerts.push('방 온도 지정 범위를 벗어났습니다.');

function xxNEWwithinRange(tempRange) {
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = this.withinRange(low, high);
  return isWithinRange;
}