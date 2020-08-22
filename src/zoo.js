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
// ----------------------------------------------------------------------------------------
// Convenção de abreviações
// anm = animal | anms = animals | grp = group | grps = groups | arr= array | vfy = verify
// rsd = residents | obj = object | res = result | per = person
// ----------------------------------------------------------------------------------------
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  // crossAnmArraySearchingId: dado um id a função percorre todo o array data.animals...
  // passando por cada grupo de animal e verificando se o grupo possui o id passado, ...
  // se der match esse grupo é retornados dentro do acumulador grpsWithId.
  // OBS: se mais de um grupo de animais possuir um mesmo id, ambos os grupos serão retornados...
  // nessa implementação.
  const crossAnmArrSearching = (id) => {
    const vfyAnmGrp = (grpsWithId, anmGrp) => {
      const comparison = anmGrp.id === id ? anmGrp : grpsWithId;
      return comparison;
    };
    return data.animals.reduce(vfyAnmGrp);
  };

  // Se soubessemos que só tem um id para procuramos, a função acima bastaria para fazer isso...
  // mas como não sabemos implementamos um reduce para percorrer todo o input id, pois pode ser...
  // um único valor ou um array de ids.
  // E para cumprir o requisito de retornar um array vazio caso a função seja chamada sem passar...
  // nenhum valor, iniciamos o acumulador anmsGrpsThatMatchIds como um array vazio.
  return ids.reduce((anmsGrpsWithIds, id) => anmsGrpsWithIds.concat(crossAnmArrSearching(id)), []);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  // Tendo vários objetos em animals, precisamos do objeto que engloba a espécie definida em animal
  // No caso sabemos que só tem um objeto para cada espécie, então basta achar o primeiro objeto...
  // que satisfaz a condição de conter a espécie com o find
  // objThatInc (Object That Includes Species)
  const objThatInc = data.animals.find(obj => obj.name === animal);

  // Tendo o objeto basta verificarmos se todos os animas (residents) tem idade igual ou acima...
  // da idade especificada.
  const response = objThatInc.residents.every(eachRsd => eachRsd.age >= age);
  return response;
}

function employeeByName(employeeName) {
  // seu código aqui
  // Tendo o input, precisamos percorrer cada objeto do array employees contido em data...
  // e verificar se o firstName ou o lastName do objeto é igual ao input, caso seja, retornamos...
  // o objeto que satisfaz a condição, senão, retornamos um objeto vazio.
  const { employees } = data;
  const name = employeeName;
  const identify = employees.find(obj => obj.firstName === name || obj.lastName === name);
  return identify || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  // Precisamos achar dentro de employees contido em data, o objeto que tem id igual ao input
  // Encontrado esse objeto precisamos verificar se a propriedade responsibleFor é vazia ou nao.
  data.employees.some(obj => obj.managers.includes(id));
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  // console.log(species)
  // const meanObj = species ? data.animals.find(obj => obj.name === species) : data.animals;
  // const counter = {
  //   countAll: () => meanObj.reduce((res, obj) =>
  //   res.concat(`${obj.name}: ${obj.residents.length}`), []).sort(),
  //   countOne: () => `${meanObj.residents.length}`,
  // };
  // return (meanObj.length > 1) ? counter.countAll() : counter.countOne();
}


function entryCalculator(entrants) {
  // seu código aqui
  if (entrants !== undefined && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce((sum, per) => sum + data.prices[per] * entrants[per], 0);
  } else {
    return 0;
  }
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
