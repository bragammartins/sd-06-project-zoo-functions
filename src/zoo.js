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

//  Caso receba nenhum parâmetro, necessário retornar um array vazio
//  Ao receber como parâmetro um único id, retorna os animais com este id
//  Ao receber mais de um id, retorna os animais que têm um desses ids
function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const animalsWithId1 = data.animals.filter(animal => animal.id === ids[0]);
  const animalsWithId2 = data.animals.filter(animal => animal.id === ids[1]);
  const animalsWithId = animalsWithId1.concat(animalsWithId2);
  return animalsWithId;
}

//  Ao passar o nome de uma espécie e uma idade,
//  testa se todos os animais desta espécie possuem
//  a idade mínima especificada
function animalsOlderThan(animal, age) {
  const animalPassed = data.animals
    .find(item => item.name === animal).residents
    .every(item => item.age > age);
  return animalPassed;
}

//  Sem parâmetros, retorna um objeto vazio
//  Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
//  Quando provido o último nome do funcionário, retorna o objeto do funcionário
function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const employFilter = data.employees
    .find(employ => employ.firstName === employeeName || employ.lastName === employeeName);
  return employFilter;
}

//  Cria um novo colaborador a partir de objetos contendo informações
//  pessoais e gerentes e animais gerenciados.
//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}

//  Testa se o id passado é de um gerente
//  Fusão de dois arrays
//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
function isManager(id) {
  const arrayManagers = data.employees.map(employ => employ.managers);
  const newArray = [];
  for (let i = 0; i < arrayManagers.length; i += 0) {
    Array.prototype.push.apply(newArray, arrayManagers[i]);
  }
  const managerFinder = newArray.find(item => item === id);
  if (managerFinder !== undefined) {
    return true;
  }
  return false;
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
