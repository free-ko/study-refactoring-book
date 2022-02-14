const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 57, time: "2016-11-10 09:10" },
    { temp: 67, time: "2016-11-10 09:10" },
    { temp: 77, time: "2016-11-10 09:10" },
    { temp: 87, time: "2016-11-10 09:10" }
  ]
}

function readingsOutsideRange(station, range) {
  return station.readings
    .filter(r => !range.contains(r.temp))
}


class NumberRange {
  constructor(min, max) {
    this._data = { min: min, max: max };
  }

  get min() {
    return this._data.min
  }

  get max() {
    return this._data.max
  }

  contains(arg) {
    return (arg >= this.min && arg <= this.max)
  }
}

const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

alerts = readingsOutsideRange(station, range)
