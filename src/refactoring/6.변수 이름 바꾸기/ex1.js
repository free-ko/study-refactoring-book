let tpHd = "undefined";

result += `<h1>${tpHd}</h1>`;

tpHd = obj['articleTitle'];

// 캡슐화 하기
result += `<h1>${title()}</h1>`

setTitle(obj['articleTitle']);

// tpHd 변수의 게터
function title() {
  return tpHd;
}

// tpHd 변수의 세터
function setTitle(arg) {
  tpHd = arg
}

// 캡슐화 후 변수 이름 변경
let _title = "undefined";

result += `<h1>${title()}</h1>`

setTitle(obj['articleTitle']);

function title() {
  return _title;
}

function setTitle(arg) {
  _title = arg
}