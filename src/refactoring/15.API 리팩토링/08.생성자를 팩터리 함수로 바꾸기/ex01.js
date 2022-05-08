// 팩터리 함수
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}
class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() { return this._name; }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return {
      "E": "Engineer",
      "M": "Manager",
      "S": "Salesperson"
    };
  }
}

// 호출자
const candidate = createEmployee(document.name, document.emType);
const leadEngineer = createEmployee(document.leadEngineer, 'E');