// defaultOwner.js
let defaultOwnerData = { firstName: "마틴", lastName: "파울리" };

export function defaultOwner() {
  return new Person(defaultOwnerData);
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}

// 테스트
const onwer1 = defaultOwner();
assert.equal("파울러", onwer1.lastName, "처음 값 확인");

const onwer2 = defaultOwner();
onwer2.lastName = "파슨스";
assert.equal("파슨스", onwer1.lastName, "owner2를 변경한 후");
