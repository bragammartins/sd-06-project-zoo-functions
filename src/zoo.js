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
  const groupOfAnimal = data.animals.filter(specie => specie.name === animal);

  return groupOfAnimal[0].residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  const employeeFirstName = data.employees.find(employee => employee.firstName === employeeName);

  if (employeeFirstName) {
    return employeeFirstName;
  }

  const employeeLastName = data.employees.find(employee => employee.lastName === employeeName);

  if (employeeLastName) {
    return employeeLastName;
  }

  return {};
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
