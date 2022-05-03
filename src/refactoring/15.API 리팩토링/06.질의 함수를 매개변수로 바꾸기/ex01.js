class HeatingPlan {
  get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }
}

// 호출자
{
  if (thePlan.targetTemperatur > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperatur > thermostat.currentTemperature) setToCool();
  else setOff();
}