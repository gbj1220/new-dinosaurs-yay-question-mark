// Your code below.
const makeDino = function (species, period, carnivore, extinct) {
  return {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct || false
  }
}

const makeExtinct = function (obj) {
  return makeDino(obj.species, obj.period, obj.carnivore, true)
}

const truncateSpecies = function (obj) {
  if (obj.species.length > 10) {
    return makeDino(obj.species.slice(0, 7) + "...", obj.period, obj.carnivore, obj.extinct)
  } else {
    return makeDino(obj.species, obj.period, obj.carnivore, obj.extinct)
  }
}

const makeSingular = function (obj) {
  if (obj.species.endsWith('us')) {
    return makeDino(obj.species.slice(0, -2), obj.period, obj.carnivore, obj.extinct)
  } else {
    return makeDino(obj.species, obj.period, obj.carnivore, obj.extinct)
  }
}

// Our code below; DO NOT TOUCH!
if (typeof makeDino === 'undefined') {
  makeDino = undefined;
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined;
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined;
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined;
}


module.exports = {
  makeDino,
  makeExtinct,
  truncateSpecies,
  makeSingular,
}
