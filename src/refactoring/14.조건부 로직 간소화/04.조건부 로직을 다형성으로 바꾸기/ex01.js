function plumages(bird) {
  return new Bird(bird).plumage;
}

function speeds(bird) {
  return new Bird(bird).airSpeedVelocity;
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return '알수 없 다';
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case '유럽 제비':
        return 35;
      case '아프리카 제비':
        return 40 - 2 * this.numberOfCounts;
      case '노르웨이 파랑 앵무':
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}

function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch(bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return '보통이다';
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return (this.numberOfCounts > 2) ? '지쳤다' : '보통이다';
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return (this.voltage > 100) ? '그을렸다' : '예쁘다';
  }
}