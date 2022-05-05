class Person {
  constructor(name, id) {
    this._name = name;
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get id() {
    return this._id;
  }

  set id(arg) {
    return this._id = arg;
  }
}

const martin = new Person('마틴', 1234);