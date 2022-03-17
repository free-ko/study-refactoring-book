class Account {
  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;

    if (this._daysOverdrawn > 0) {
      result += this.type.overdraftCharge(this.daysOverdraw);
      return result;
    }
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdraw);
  }

  // 초과 인출 이자 계산
  get overdraftCharge() {
    return this.type.overdraftCharge(this);
  }
}

class AccountType {
  overdraftCharge(acount) {
    if (this.isPremuim) {
      const baseCharge = 10;

      if (acount <= 7) {
        return baseCharge;
      } else {
        return baseCharge + (acount - 7) * 0.85;
      }
    } else {
      return acount * 1.75;
    }
  }
}