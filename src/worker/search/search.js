import { FIELDS, Info } from '../../../plugins/lib'

import lunr from 'lunr'

let idx

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

  return {
    map
  }
}
