class HeatingPlan {
  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;

    return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
  }

  xxNEWtargetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

// 호출자
{
  if (thePlan.targetTemperatur > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperatur > thermostat.currentTemperature) setToCool();
  else setOff();
}