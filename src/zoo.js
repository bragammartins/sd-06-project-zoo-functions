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
const { animals } = require('./data');
const { employees } = require('./data');

function animalsByIds(...ids) {
  const getAnimalById = animals.filter(animal => ids.includes(animal.id));
  return getAnimalById;
}

function animalsOlderThan(animalName, animalAge) {
  const getAnimalByName = data.animals.find(animal => animal.name === animalName);
  const animalsResidentsObj = getAnimalByName.residents;
  return animalsResidentsObj.every(animal => animal.age >= animalAge);
}

function employeeByName(employeeName) {
  const getEmployeeByName = employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName,
  );
  if (!employeeName) return {};
  return getEmployeeByName;
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
