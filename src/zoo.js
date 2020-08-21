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

const animalsByIds = (...ids) => ids.map(id => animals.find(a => a.id === id));

const animalsOlderThan = (animal, age) => animals.find(a => a.name === animal)
  .residents.every(a => a.age > age);

const employeeByName = employeeName => (
  (employeeName === undefined) ? {} :
    employees.find(e => e.firstName === employeeName || e.lastName === employeeName)
);

const createEmployee = (personalInfo, associatedWith) =>
  Object.assign(personalInfo, associatedWith);

const isManager = id => employees.some(e => e.managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => data.employees
  .push({ id, firstName, lastName, managers, responsibleFor });

const animalCount = (species) => {
  if (!species) {
    // return animals.map(a => ({ [a.name]: a.residents.length })).reduce((acc, i) =>
    //   Object.assign(acc, i));
    return animals.reduce((acc, a) => ({ ...acc, [a.name]: a.residents.length }), {});
  }
  return animals.find(a => a.name === species).residents.length;
};

const entryCalculator = (entrants) => {
  if (!entrants) {
    return 0;
  }
  let sum = 0;
  const entrantsKeys = Object.keys(entrants);

  // Object.entries(entrants).forEach(([key, value]) => sum += prices[key] * value);
  for (let i = 0; i < entrantsKeys.length; i += 1) {
    sum += prices[entrantsKeys[i]] * entrants[entrantsKeys[i]];
  }
  return sum;
};

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
