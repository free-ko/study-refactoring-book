class Party {
  get annulCost() {
    return this.monthlyCost * 12;
  }
}

// 상속받는 클래스 내부에서 함수 구현
class Employee extends Party {
  // get annulCost() {
  //   return this.monthlyCost * 12;
  // }
}

class Department extends Party {
  // get annulCost() {
  //   return this.monthlyCost * 12;
  // }
}