function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don'
    }

    if (people[i] === 'John') {
      return 'John'
    }

    if (people[i] === 'kent') {
      return 'kent'
    }
  }
}

// 수정
function newFoundPerson(people) {
  const candidates = ['Don', 'John', 'Kent']

  return people.find(p => candidates.includes(p) || "");
}