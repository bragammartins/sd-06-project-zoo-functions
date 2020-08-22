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
  return data.animals.filter((animal) => {
    for (let i = 0; i < ids.length; i += 1) {
      if (animal.id === ids[i]) {
        return true;
      }
    }
    return false;
  });
}

function animalsOlderThan(animal, age) {
  const groupOfAnimal = data.animals.find(specie => specie.name === animal);

  return groupOfAnimal.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  const name = data.employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  if (name) {
    return name;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  return data.employees
    .some(employee => employee.managers
    .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  if (species) {
    return data.animals.find(animal => animal.name === species).residents.length;
  }
  const count = data.animals.map(animal => animal.residents.length);
  species = data.animals.map(animal => animal.name);

  const creatArrayAnimals = {};

  for (let i = 0; i < count.length; i += 1) {
    creatArrayAnimals[species[i]] = count[i];
    // species.forEach((specie, index) => creatArrayAnimals[specie] = count[index]);
  }
  return creatArrayAnimals;
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(...dayName) {
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
