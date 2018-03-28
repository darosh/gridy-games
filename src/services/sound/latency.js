import { Constants } from './constants'

const {
  MILLISECONDS,
  LATENCY_DEFAULT,
  LATENCY_RATIO
} = Constants
class Latency {
  get latency () {
    if (isNaN(this._latency)) {
      import('../../../plugins/tone')
        .then(({ Tone }) => {
          this._latency = (Tone.supported && !isNaN(Tone.context.baseLatency))
            ? Tone.context.baseLatency * MILLISECONDS * LATENCY_RATIO
            : LATENCY_DEFAULT
        })
      this._latency = LATENCY_DEFAULT
    }

    return this._latency
  }

  get start () {
    return `+${this.latency / MILLISECONDS}`
  }

  get stop () {
    return `+${this.latency / LATENCY_RATIO / MILLISECONDS}`
  }

  set last (value) {
    if (this._last && this._last.cancel) {
      this._last.triggerRelease(this.stop)
      this._last = null
    }
    this._last = value
  }
}

export const latency = new Latency()
