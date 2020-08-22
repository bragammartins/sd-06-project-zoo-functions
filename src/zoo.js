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

function animalsByIds(...ids) {
  if (!ids) {
    return [];
  }
  return ids.map(element => data.animals.find(arrayAnimals => element === arrayAnimals.id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(element => element.name === animal).residents
  .every(element => element.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees
  .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const employee = { id, firstName, lastName, managers, responsibleFor };
  return employee;
}

function isManager(id) {
  return data.employees.some(element => element.managers.includes(id) === true);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers,
    responsibleFor: responsibleFor
  });
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
