// 예제 1.
function tenPercentRaise(aPerson) {
  aPerson.salay = aPerson.salary.multiply(1.1);
}

function fivePercentRaise(aPerson) {
  aPerson.salay = aPerson.salary.multiply(1.05);
}

// 리팩토링
function raise(aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
}


// 예제 2.
function baseCharge(usage) {
  if (usage < 0) return usd(0);

  const amount = 
    withinBand(usage, 0, 100) * 0.03
    + withinBand(usage, 100, 200) * 0.05
    + withinBand(usage, 200, Infinity) * 0.07;

  return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}