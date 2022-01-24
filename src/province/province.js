// JSON 데이터로부터 지역 정보를 읽어 옴
class Province {
  constructor(doc) {
    this._name = doc.name;
    this.producer = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach(d => this.addProducer(new producer(this, d)))
  }

  addProducer(arg) {
    this._producers.push(arg);
    this.totalProduction += arg.production;
  }
}