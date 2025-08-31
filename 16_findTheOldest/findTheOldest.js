const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (array) {
  let allAges = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].yearOfDeath === null ||
      array[i].yearOfDeath === undefined ||
      array[i].yearOfDeath === ""
    ) {
      array[i].yearOfDeath = 2025;
    }

    let age = array[i].yearOfDeath - array[i].yearOfBirth;
    allAges.push(age);
  }
  console.log(allAges);
  let oldest = allAges.reduce((total, current) =>
    total > current ? total : current
  );
  console.log(oldest);

  let indexOfOldest = allAges.indexOf(oldest);
  return array[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
