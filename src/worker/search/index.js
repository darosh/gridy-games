import { Games, table } from '../../../plugins/lib'

const Work = require('worker-loader!./worker.js') // eslint-disable-line

const worker = new Work()
const all = Object.freeze(table(Games))
const cache = {}
let last
let resolvers = []
export let items = all
export let words

worker.onmessage = function (event) {
  const result = JSON.parse(event.data)
  const resolver = resolvers.pop()
  const { map, autocomplete } = result

  if (map) {
    items = Object.freeze(all.filter((i) => map[i.id]))
  } else {
    items = all
  }

  words = autocomplete
  cache[last] = { items, words }
  resolver({ items, words })
}

export function search (text) {
  text = (text || '').trim().toLowerCase()

  return new Promise((resolve) => {
    if (cache[text]) {
      items = cache[text].items
      words = cache[text].words
      return resolve({ items, words })
    }

    last = text
    resolvers.push(resolve)
    worker.postMessage(text)
  })
}

export function game (id) {
  return all.find((g) => g.id === id)
}

export function similar (id, exclude) {
  return all.filter((g) => g.originalId === id && g.id !== exclude)
}
