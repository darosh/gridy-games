import {
  FIELDS,
  Games,
  table
} from '../../lib'

import lunr from 'lunr'

let idx

export function build () {
  const items = table(Games)

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
  }

  const map = {}

  try {
    idx.search(text).forEach((k) => {
      map[k.ref] = true
    })
  } catch (ignore) {
    return false
  }

  return map
}
