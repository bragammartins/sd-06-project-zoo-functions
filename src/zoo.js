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
const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  const idsAnimals = [];
  ids.forEach((animalId) => {
    idsAnimals.push(animals.find(animal => animal.id === animalId));
  });
  return idsAnimals;
}

function animalsOlderThan(animal, age) {
  const find = animals.find(nameAnimal => nameAnimal.name === animal);
  const residents = find.residents;
  return residents.every(ageAnimal => ageAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find(employe =>
    employe.firstName === employeeName || employe.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some(person => person.managers
    .includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {
  const specificAnimal = animals.find(animal => animal.name === species);
  const allAnimals = animals.reduce((atual, { name, residents }) => {
    atual[name] = residents.length;
    return atual;
  }, {});

  return (!species) ? allAnimals : specificAnimal.residents.length;
}

function entryCalculator(entrants) {

}

function animalMap(options) {

}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  return prices.forEach(item => Object.entries(item) * percentage);
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
