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
  if (ids === []) {
    return [];
  } else if (ids.lenght === 1) {
    return data.animals.filter(animal => animal.id === ids[0]);
  }
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return data.animals.filter(animal2 => animal2.name === animal)
  .some(animal3 => animal3.residents.every(idade => idade.age > age));
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.filter(funcionario => (
    funcionario.firstName === employeeName || funcionario.lastName === employeeName))[0];
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}


function isManager(id) {
  return data.employees.some(funcionario => funcionario.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (managers === undefined) managers = [];
  if (responsibleFor === undefined) responsibleFor = [];
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
/*  if (species === undefined) {
    const obj = {};
    data.animals.forEach(animal => obj[animal.name] = animal.residents.length);
    return obj;
  }
  return data.animals.find(animal => animal.name === species).residents.length;*/
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  let soma = 0;
  if (entrants.Adult) soma += (data.prices.Adult * entrants.Adult);
  if (entrants.Child) soma += (data.prices.Child * entrants.Child);
  if (entrants.Senior) soma += (data.prices.Senior * entrants.Senior);
  return soma;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const agenda = Object.entries(data.hours);
  if (dayName === undefined) {
    const agendaNova = {};
    agenda.map((horario) => {
      if (horario[0] === 'Monday') {
        agendaNova.Monday = 'CLOSED';
        return agendaNova;
      }
      agendaNova[horario[0]] = `Open from ${horario[1].open}am until ${horario[1].close - 12}pm`;
      return agendaNova;
    });
    return agendaNova;
  }
  return agenda.filter(horario => horario[0] === dayName).map((horario) => {
    if (horario[0] === 'Monday') return { [dayName]: 'CLOSED' };
    return { [dayName]: `Open from ${horario[1].open}am until ${horario[1].close - 12}pm` };
  })[0];
}

console.log(schedule('Monday'));

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
