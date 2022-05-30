class Person {
  constructor(name) {
    this._name = name;
  }

  get name() { return this._name; }
  get genderCode() { return "X"; }
  // 생략
}

class Male extends Person {
  get genderCode() { return "M"; }
}

class Female extends Person {
  get genderCode() { return "F"; }
}

const numberOfMales = people.filter(p => p.isMale).length;

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M': return new Male(aRecord.name); break;
    case 'F': return new Female(aRecord.name); break;
    default: return new Person(aRecord.name);
  }
}

function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}

function isMale(aPerson) {
  return aPerson instanceof Male;
}