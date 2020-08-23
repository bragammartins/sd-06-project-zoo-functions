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
const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length < 1) {
    return [];
  }
  const novoArray = [];
  ids.forEach(objeto => novoArray.push(animals.find(element => element.id === objeto)));
  return novoArray;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find(anyAnimal => anyAnimal.name === animal).residents
  .every(idade => idade.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const findSearchTrue = employees
  .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
  if (findSearchTrue === undefined) {
    return {};
  }
  return findSearchTrue;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
  const isOrNotAManager = [];
  employees.forEach(eachEmployee => eachEmployee.managers
    .find(gerente => isOrNotAManager.push(gerente === id)));
  return isOrNotAManager.some(result => result === true);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
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
