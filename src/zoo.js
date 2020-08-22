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

const { animals, employees } = data;

function animalsByIds(...ids) {
  return ids.map(item => animals.find(animal => animal.id === item));
}

function animalsOlderThan(animal, age) {
  return animals.some(item => (
    item.name === animal && item.residents.every(item2 => item2.age >= age)
  ));
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(item => item.firstName === employeeName || item.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return employees.some(obj => obj.managers.some(item => item === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers: [].concat(managers),
    responsibleFor: [].concat(responsibleFor),
  });
}

function animalCount(species = animals) {
  if (species !== animals) {
    const { residents } = animals.find(item => item.name === species);
    return residents.length;
  }
  return species.reduce((acc, { name, residents }) =>
    (Object.assign(acc, { [name]: residents.length })), {});
}

/* console.log(animalCount('snakes')); */

function entryCalculator(entrants) {
  if (entrants === undefined) return 0;

  return Object.entries(entrants).reduce((total, [key, value]) => {
    return total + data.prices[key] * value;
  }, 0);
}

/* let entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
console.log(entryCalculator(entrants)); */

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
