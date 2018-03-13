import {
  Games,
  table
} from '../../lib'

const Work = require('worker-loader!./worker.js') // eslint-disable-line

const worker = new Work()
const all = table(Games)
const cache = {}
let last
let resolver

worker.onmessage = function (event) {
  const map = JSON.parse(event.data)

  if (map) {
    const filtered = all.filter((i) => map[i.id])
    cache[last] = filtered
    resolver(filtered)
  } else {
    cache[last] = all
    resolver(all)
  }
}

export function search (text) {
  return new Promise((resolve) => {
    if (!text || !text.trim()) {
      return resolve(all)
    }

    if (cache[text]) {
      return resolve(cache[text])
    }

    last = text
    resolver = resolve
    worker.postMessage(text)
  })
}
