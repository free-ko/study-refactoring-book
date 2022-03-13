class Person {
  // get manager() {
  //   return this._department.manager;
  // }

  get department() {
    return this._department;
  }
}

class Department {
  get manager() {
    return this._manger;
  }
}

// 클라이언트
manager = aPerson.manager;

// 수정
manager = aPerson.department.managerl;