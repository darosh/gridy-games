var uniqueRandomArray = require('unique-random-array')
var superheroes = require('./heroes.json')

exports.all = superheroes
exports.random = uniqueRandomArray(superheroes)
