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

function animalsByIds(...ids) {
  return ids
  .flatMap(idIndex => animals
  .filter(animal => animal.id === idIndex));
}

function animalsOlderThan(animal, age) {
  return animals
  .filter(animalOfList => animalOfList.name === animal)
  .flatMap(filteredAnimal => filteredAnimal.residents)
  .every(residentAnimals => residentAnimals.age >= age);
}

function employeeByName(employeeName) {
  return (employeeName) ? data.employees
  .find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === employeeName || lastName === employeeName;
  }) : {};
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
  const { employees } = data;
  const managers = employees.reduce((managerLi, curr) => managerLi.concat(curr.managers), []);
  return managers.some(managerId => managerId === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species = 'allOfThem') {
  if (species === 'allOfThem') {
    const animalList = {};
    animals
    .forEach((animal) => {
      const { name, residents } = animal;
      animalList[`${name}`] = residents.length;
    });
    return animalList;
  }
  return animals.filter(animal => animal.name === species)[0].residents.length;
}

function verifyPrices(type) {
  let sum = 0;
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = data.prices;
  (type === 'Adult') ? sum = adultPrice : sum;
  (type === 'Senior') ? sum = seniorPrice : sum;
  (type === 'Child') ? sum = childPrice : sum;
  return sum;
}

function entryCalculator(entrants = 0) {
  if (entrants.length === 0 || entrants === 0) return 0;
  return Object.keys(entrants)
  .reduce((acc, curr, index) => acc + (Object.values(entrants)[index] * verifyPrices(curr)), 0);
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
