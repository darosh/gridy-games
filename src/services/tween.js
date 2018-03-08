import TWEEN from '@tweenjs/tween.js'

let pending = 0

function animate (time) {
  if (!pending) {
    return
  }

  requestAnimationFrame(animate)
  TWEEN.update(time)
}

export function start () {
  pending++

  if (pending < 2) {
    requestAnimationFrame(animate)
  }
}

export function stop () {
  pending--
}
