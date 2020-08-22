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

//  requisito1 - ok
function animalsByIds(...ids) {
  const listOfAnimals = animals.filter(animal => ids.filter(id => id === animal.id).length > 0);
  return listOfAnimals;
}


//  requisito2 - ok
function animalsOlderThan(specie, age) {
  const list = animals.filter(animal => animal.name === specie);
  const residents = list.filter(zoo => zoo.residents.every(resident => resident.age > age));
  return (residents.length > 0);
}


//  requisito3 - ok
function employeeByName(employeeName) {
  if (employeeName == null) {
    return {};
  }
  const employee = employees.find(emp =>
  (emp.firstName === employeeName) || (emp.lastName === employeeName));

  return employee;
}


//  requisito4 - ok
function createEmployee(personalInfo, associatedWith) {
  const employee = {
    ...personalInfo,
    ...associatedWith,
  };
  return employee;
}


//  requisito5 - logica?
function isManager(id) {
  const teste = employees.filter(empregado => empregado.managers.some(manager => manager === id));
  return (teste > 0);
}
//  console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));


//  requisito6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}


//  requisito7 - não deu certo
function animalCount(species) {
  const listAnimal = animals.filter(animal => animal.name === species);
  const list = listAnimal.reduce((acc, currentValue) => {
    if (listAnimal === species) {
      return acc + currentValue;
    }
  });
};
//  console.log(animalCount('lions'))

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
