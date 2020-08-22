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
  // seu código aqui..
  const validaParametroFuncaoAnimalsByIds = [];
  if (ids.length === validaParametroFuncaoAnimalsByIds.length) {
    return [];
  }
  const result = animals
  .filter(filteredAnimal => filteredAnimal.id === ids);
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const filteredAnimal = animals.find(nameAnimal => nameAnimal.name === animal);
  return filteredAnimal.residents.every(olderAnimal => olderAnimal.age > age);
}

function employeeByName(...employeeName) {
  // seu código aqui
  const validaParametroFuncaoEmployeeByName = [];
  if (employeeName.length === validaParametroFuncaoEmployeeByName.length) {
    return {};
  }
  const searchEmployee = employees
  .find(employee => employeeName.includes(employee.firstName) ||
  employeeName.includes(employee.lastName));
  return searchEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
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
