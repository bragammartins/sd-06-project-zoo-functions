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
    animals.forEach((animal) => {
      const animalName = animal.name;
      const animalNumber = animal.residents.length;
      myAnimals[animalName] = animalNumber;
    });
    return myAnimals;
  }
  const findTheAnimal = animals.find(animal => animal.name === species);
  return findTheAnimal.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === '' || Object.keys(entrants).length === 0) {
    return 0;
  }
  let entryPrice = 0;
  if (entrants.Adult) {
    entryPrice += (entrants.Adult * data.prices.Adult);
  }
  if (entrants.Child) {
    entryPrice += (entrants.Child * data.prices.Child);
  }
  if (entrants.Senior) {
    entryPrice += (entrants.Senior * data.prices.Senior);
  }
  return entryPrice;
}

function animalMapWithNoParams() {
  const result = {};
  const animalsByLocation = {};
  const directions = ['NE', 'NW', 'SE', 'SW'];

  directions.forEach((direction) => {
    const myDirection = `animals${direction}`; // animalsByLocation[myDirection] = animalsNE
    animalsByLocation[myDirection] = animals.filter(animal => animal.location === direction);

    result[direction] = animalsByLocation[myDirection].map(animal => animal.name);
  });
  return result;
}

function animalMapWithIncludeNames(options) {
  const result = {};
  const animalsByLocation = {};
  const directions = ['NE', 'NW', 'SE', 'SW'];

  directions.forEach((direction) => {
    const myDirection = `animals${direction}`; // animalsByLocation[myDirection] = animalsNE
    animalsByLocation[myDirection] = animals.filter(animal => animal.location === direction);
    const animalNames = animalsByLocation[myDirection].map(animal => animal.name);

    let residents = animalsByLocation[myDirection].map(animal => animal.residents);
    if (options.sex) {
      residents = animalsByLocation[myDirection]
        .map(animal => animal.residents.filter(each => each.sex === options.sex)
          .map(resident => resident.name));
    } else {
      residents = animalsByLocation[myDirection]
        .map(animal => animal.residents.map(resident => resident.name));
    }

    result[direction] = [];
    for (let i = 0; i < animalNames.length; i += 1) {
      if (options.sorted === true) residents[i].sort();
      result[direction].push({ [animalNames[i]]: residents[i] });
    }
  });
  return result;
}

function animalMap(options) {
  // seu código aqui
  if (!options) return animalMapWithNoParams();
  if (options.includeNames) return animalMapWithIncludeNames(options);

  return animalMapWithNoParams();
}


// console.log(animalMap({ includeNames: true, sex: 'female', sorted: true }));

function schedule(dayName) {
  // seu código aqui
  const result = {};
  const daysOfTheWeek = Object.keys(data.hours);

  if (dayName) {
    if (dayName === 'Monday') {
      result[dayName] = 'CLOSED';
      return result;
    }
    const myDay = data.hours[dayName];
    result[dayName] = `Open from ${myDay.open}am until ${myDay.close - 12}pm`;
    return result;
  }

  daysOfTheWeek.map((day) => {
    if (day === 'Monday') {
      result[day] = 'CLOSED';
      return result;
    }

    const open = data.hours[day].open;
    const close = data.hours[day].close - 12;
    result[day] = `Open from ${open}am until ${close}pm`;
    return result;
  });
  return result;
}

schedule('Tuesday');

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const myEmployee = data.employees.find(employee => employee.id === id);
  const employeeFirstAnimalID = myEmployee.responsibleFor[0];
  const myAnimal = animals.find(animal => animal.id === employeeFirstAnimalID);
  const oldestAnimal = myAnimal.residents.reduce((resident, next) => {
    if (resident.age > next.age) {
      return resident;
    }
    return next;
  });

  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  const ages = Object.keys(data.prices);
  const percent = percentage / 100;

  ages.forEach(age => {
    let myNum = data.prices[age];
    let increase = myNum * percent;
    myNum += increase;
    // solução matemágica abaixo encontrada numa thread do slack, da turma 1!
    myNum = Math.round(myNum * 100) / 100;

    data.prices[age] = myNum;
  });
  console.log(data.prices)
}
// increasePrices(50);
// increasePrices(30);

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
