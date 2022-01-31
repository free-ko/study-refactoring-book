const Province = require('../province.ts')

function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 12, production: 10 },
      { name: "Sinope", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20
  }
}

describe('province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  })


  it('shortfail', function () {
    expect(asia.shortfall).toEqual(5)
  })

  it('profit', function () {
    expect(asia.profit).toEqual(230)
  })
})
