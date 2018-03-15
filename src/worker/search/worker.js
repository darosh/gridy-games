/* globals self */

import '../../../plugins/debug'
import { search } from './search'

self.onmessage = function (event) {
  const result = search(event.data)
  self.postMessage(JSON.stringify(result))
}
