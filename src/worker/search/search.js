import { FIELDS, Info } from '../../../plugins/lib'

import lunr from 'lunr'

let idx
let words

export function build () {
  const items = Info.games

  return lunr(function () {
    this.ref('id')
    FIELDS.forEach((f) => this.field(f))

    items.forEach(function (doc) {
      this.add(doc)
    }, this)
  })
}

export function search (text) {
  if (!idx) {
    idx = build()
    words = Object.keys(idx.invertedIndex).sort()
  }

  let map = {}

  try {
    if (!text) {
      map = false
    } else {
      idx.search(text).forEach((k) => {
        map[k.ref] = true
      })
    }
  } catch (ignore) {
    map = false
  }

  const autocomplete = text ? words.filter((w) => w.includes(text)) : words

  return {
    map,
    autocomplete
  }
}
