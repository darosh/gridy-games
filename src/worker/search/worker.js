/* globals self */

import {
  search
} from './build'

self.onmessage = function (event) {
  const result = search(event.data)
  self.postMessage(JSON.stringify(result))
}
