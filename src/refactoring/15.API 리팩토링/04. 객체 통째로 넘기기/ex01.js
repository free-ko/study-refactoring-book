// HeatingPlan 클래스
class HeatingPlan {
  withinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low) &&
      (aNumberRange.high <= this._temperatureRange.high);
  }
}

// 호출자
if (!aPlan.withinRange(aRoom.daysTempRange)) alerts.push('방 온도 지정 범위를 벗어났습니다.');