import { stringify } from '../../../plugins/lib'

const Work = require('worker-loader!./worker.js') // eslint-disable-line

export class PlayerWorker {
  constructor (player, game) {
    this.id = 0
    this.promises = {}
    this.worker = new Work()
    this.worker.onmessage = this.message.bind(this)
    this.worker.postMessage({
      player,
      game
    })
  }

  message (event) {
    const data = JSON.parse(event.data)

    this.promises[data.id].resolve(data)
    delete this.promises[data.id]
  }

  select (game) {
    return this.post({
      game: stringify(game).join(', ')
    }).then(d => {
      d.move = game.stringToMove(d.move)
      return d
    })
  }

  post (payload) {
    this.id++

    const promise = new Promise((resolve, reject) => {
      this.promises[this.id] = {
        resolve,
        reject
      }
    })

    this.worker.postMessage({
      ...payload,
      id: this.id
    })

    return promise
  }

  terminate () {
    this.worker.terminate()
    delete this.worker
  }
}
