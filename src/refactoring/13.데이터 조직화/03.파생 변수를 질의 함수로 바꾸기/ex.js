class ProductionPlan {
  constructor(production) {
    this._initalProduction = production;
    this._producionAccumulator = 0;
    this._adjustments = [];
  };

  get production() {
    return this._initalProduction + this._producionAccumulator;
  };

  applyAdjustment() {
    return this._adjustments
      .reduce((sum, a) => sum + a.amount, 0);
  };
}