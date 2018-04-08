// based on https://github.com/Inndy/vue-clipboard2/blob/master/vue-clipboard.js

import Clipboard from 'clipboard'

export function copy (text, container) {
  return new Promise(function (resolve, reject) {
    var fakeEl = document.createElement('button')

    var clipboard = new Clipboard(fakeEl, {
      text: function () { return text },
      action: function () { return 'copy' },
      container: typeof container === 'object' ? container : document.body
    })

    clipboard.on('success', function (e) {
      clipboard.destroy()
      resolve(e)
    })

    clipboard.on('error', function (e) {
      clipboard.destroy()
      reject(e)
    })

    fakeEl.click()
  })
};
