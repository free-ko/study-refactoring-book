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
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month]

  return { laterAmount: later, change: later - earlier }
}

// 캡슐화
class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

function getCustomerData() {
  return customerData
}

function getRawDataOfCustomers() {
  return customerData;
}

function setRawDataOfCustomers(arg) {
  customerData = arg
}

getRawDataOfCustomers()[customerID].usages[year][month] = amount

function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month]

  return { laterAmount: later, change: later - earlier }
}