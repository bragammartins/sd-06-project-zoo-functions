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
  // seu código aqui
  const result = [];
  if (ids === undefined) {
    return [];
  }

  for (let i = 0; i < ids.length; i += 1) {
    const animalsMap = animals.filter(animal => animal.id === ids[i]);
    result[i] = animalsMap[0];
  }
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const myAnimal = animals.find(species => species.name === animal);
  return myAnimal.residents.every(one => one.age >= 7);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined || employeeName === '') {
    return {};
  }
  // supondo que não tem pessoas com o mesmo primeiro nome né
  const myEmployee = data.employees
    .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
  return myEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  // data.employees.push(newEmployee);
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const myEmployee = data.employees
    .find(employee => employee.id === id);
  console.log(myEmployee.managers);
  if (myEmployee.managers.length < 2) {
    // É um gerente!!!
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}


function animalCount(species) {
  // seu código aqui
  if (species === undefined || species === '') {
    const myAnimals = {};
    animals.map((animal) => {
      const animalName = animal.name;
      const animalNumber = animal.residents.length;
      myAnimals[animalName] = animalNumber;
    });
    return myAnimals;
  } else {
    const findTheAnimal = animals.find(animal => animal.name === species);
    return findTheAnimal.residents.length;
  }
}
// console.log(animals[0]);
// console.log(animalCount('otters'));

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
