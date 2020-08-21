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
  // seu código aqui 
  //verifyAnimalGroup: dado um id a função percorre todo o array data.animals passando por...
  //cada grupo de animal e verificando se o grupo possui o id passado, se der match...
  //esse grupo é retornados dentro do acumulador groupsWithId. OBS: se mais de um grupo de ...
  //animais possuir um mesmo id, ambos os grupos serão retornados nessa implementação.
  const verifyAnimalGroup = (receivedId) => data.animals.reduce( (groupsWithId, animalGroup) => (animalGroup.id === receivedId) ? animalGroup : groupsWithId);
  
  //Se soubessemos que há somente um id para procuramos, a função acima bastaria para fazer isso...
  //mas como não sabemos implementamos um reduce para percorrer todo o input id, pois pode ser...
  //um único valor ou um array de ids.
  //E para cumprir o requisito de retornar um array vazio caso a função seja chamada sem passar...
  //nenhum valor, iniciamos o acumulador animalsGroupsThatMatchIds como um array vazio.
  return ids.reduce( (animalsGroupsThatMatchIds, id) => animalsGroupsThatMatchIds.concat(verifyAnimalGroup(id)), []);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui
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
