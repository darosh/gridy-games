class Latency {
  get latency () {
    if (isNaN(this._latency)) {
      const {
        supported,
        context
      } = require('tone')

      this._latency = (supported && !isNaN(context.baseLatency)) ? context.baseLatency * 1000 * 2 : 25
    }

    return this._latency
  }

  get start () {
    return `+${this.latency / 1000}`
  }

  get stop () {
    return `+${this.latency / 2 / 1000}`
  }

  set last (value) {
    if (this._last && this._last.cancel) {
      this._last.triggerRelease(this.stop)
      this._last = null
    }
    this._last = value
  }

  get master () {
    if (!this._master) {
      const {
        Master
      } = require('tone')
      this._master = Master
    }

    return this._master
  }
}

export const latency = new Latency()
