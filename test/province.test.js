const Province = require('../src/province/province'.js)

describe('province', function () {
  it('shortfail', function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5)
  })
})
