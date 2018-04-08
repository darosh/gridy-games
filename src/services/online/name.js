import { random as randomHero } from '../../../plugins/superheroes'

function randomDigit () {
  return Math.floor(Math.random() * 9) + 1
}

function randomLetter () {
  const a = 'A'.charCodeAt(0)
  const z = 'Z'.charCodeAt(0)

  return String.fromCharCode(Math.floor(Math.random() * (z - a + 1)) + a)
}

export function randomName () {
  return `${randomHero()} ${randomLetter()}${randomDigit()}`
}
