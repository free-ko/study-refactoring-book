const organization = { name: "애크미 구스베리", country: "GB" }

result += `<h1>${organization.name}</h1>`;  // 읽기 예
organization.name = newName // 쓰기 예


// 변수 캡슐화
function getRawDataOfOrganization() {
  return organization
}

// 수정
result += `<h1>${getRawDataOfOrganization().name}</h1>`;
getRawDataOfOrganization().name = newName

// 클래스로 수정
class Organization {
  constructor(data) {
    this._name = data.name
    this._country = data.country
  }

  get name() {
    this._name;
  }

  set name(aString) {
    this._name = aString
  }

  get country() {
    return this._country
  }

  set country(aCountryCode) {
    this._country = aCountryCode
  }
}

const organization = new Organization({ name: "애크미 구스베리", country: "GB" })

function getOrganization() {
  return organization;
}

getOrganization().name = newName;

result += `<h1>${getOrganization().name}</h1>`;
