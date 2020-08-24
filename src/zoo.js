/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.find(thoseWhich => thoseWhich === animal.id));
}

function animalsOlderThan(animal, age) {
  const especie = animals.filter(inPut => inPut.name === animal).map(inPut => inPut.residents);
  let count = 0;
  for (let index = 0; index < especie[0].length; index += 1) {
    const eachAge = especie[0][index].age;
    if (eachAge > age) {
      count += 1;
    }
  }
  if (count === especie[0].length) {
    return true;
  }
  return false;
}

function employeeByName(employeeName) {
  const empty = {};
  if (employeeName === undefined) {
    return empty;
  }
  return employees
  .find(inPut => inPut.firstName === employeeName || inPut.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const empty = {};
  if (personalInfo === undefined && associatedWith === undefined) {
    return empty;
  }
  const object = Object.assign(empty, personalInfo, associatedWith);
  return object;
}

function isManager(id) {
  return employees.some(inPut => inPut.managers.find(inPutTwo => inPutTwo === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    },
  );
}

function animalCount(species) {
  if (!species) {
  return animals.reduce((acc, { name, residents }) =>
    Object.assign(acc, {
      [name]: residents.length,
    }), {}
  )
}
  return animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === {} || entrants === undefined) {
    return 0;
  }
  const visitorId = Object.keys(entrants);
  const visitorAmount = Object.values(entrants);
  const totalValue = visitorAmount
  .reduce((acc, currentValue, index) => acc + (currentValue * prices[visitorId[index]]), 0);
  return totalValue;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
