function test(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) {
      totalSalary += p.salary;
    }
  }

  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age;
    }
  }

  return `최연소 : ${youngestAge()}, 총 급여: ${totalSalary()}`;

  function totalSalary() {
    // let totalSalary = 0;

    // for (const p of people) {
    //   return totalSalary;
    // }

    return people.reduce((total, p) => total + p.salary, 0);
  }

  function youngestAge() {
    //   let youngest = people[0] ? people[0].age : Infinity;

    //   for (const p of people) {
    //     if (p.age < youngest) {
    //       youngest = p.age;
    //     }
    //   }

    //   return youngest;
    // }

    return Math.min(...people.map(p => p.age));
  }
}
