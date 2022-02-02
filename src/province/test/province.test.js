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

  it('change production', function () {
    asia.prdoucers[0].production = 20;
    expect(asia.shortfall).toEqual(-6);
    expect(asia.profit).toEqual(292);
  })

  // 수요자가 없을 때
  it('zero demand', function () {
    asia.demand = 0;
    expect(asia.shortfall).toEqual(-25);
    expect(asia.profit).toEqual(0)
  })

  // 수요가 마이너스
  it('negative demand', function () {
    asia.demand = -1;
    expect(asia.shortfall).toEqual(-26);
    expect(asia.profi).toEqual(-10);
  })

  // 수요 입력란 비어있음
  it('empty string demand', function () {
    asia.demand = "";
    expect(asia.shortfal).toBeNaN()
    expect(asia.profit).toBeNaN()
  })

})

// 생성자가 없을 경우
describe('no prdoucers', function () {
  let noProducers;
  beforeEach(function () {
    const data = {
      name: "No Producers",
      producers: [],
      demand: 30,
      price: 20
    };
    noProducers = new Province(data);
  })

  it('shortfall', function () {
    expect(noProducers.shortfall).toEqual(30);
  })

  it('profit', function () {
    expect(noProducers.profit).toEqual(0);
  })

  // 생산자 수 필드에 문자열 대입
  describe('string for producers', function () {
    it('', function () {
      const data = {
        name: "String producers",
        producers: "",
        deamnd: 30,
        price: 20
      }

      const prov = new Province(data);
      expect(prov.shortfall).toEqual(0);
    })
  })
})
