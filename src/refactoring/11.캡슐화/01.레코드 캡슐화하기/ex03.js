const customerData = {
  "1920": {
    name: "마틴 파울리",
    id: "1920",
    usages: {
      "2016": {
        "1": 50,
        "2": 55
      },
      "2015": {
        "1": 70,
        "2": 63
      }
    }
  },
  "38673": {
    name: "닐 포드",
    id: "38673"
  }
}

// 쓰기 예
customerData[customerID].usages[year][month] = amount

// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usage[laterYear][month]
  const earlier = getCustomerData().rawData[customerID].usage[laterYear - 1][month]

  return { laterAmount: later, change: later - earlier }
}

// 캡슐화
class CustomerData {
  constructor(data) {
    this._data = data;
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month]
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);  // lodash 라이브러리 제공하는 깊은 복사 cloneDeep이용
  }
}

function getCustomerData() {
  return customerData
}

function getRawDataOfCustomers() {
  return customerData.rawData;
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg)
}


function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month]

  return { laterAmount: later, change: later - earlier }
}
