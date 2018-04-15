const COLORS = ['lightgreen', 'lightgoldenrodyellow', 'lightsalmon', 'deepskyblue']

export const logs = []

export function log (msg, level = 0) {
  const time = new Date()

  if (typeof msg === 'object') {
    logs.push({ msg: serialize(msg), level, time })
  } else if (!msg.startsWith('Message: ')) {
    logs.push({ msg, level, time })
  }

  if (process.env.NODE_ENV !== 'production') {
    if (typeof msg === 'object') {
      console.dir(msg)
    } else {
      console.log(`%c${msg}`, `background-color: ${COLORS[level]}`)
    }
  }
}

function serialize (msg) {
  try {
    return JSON.stringify(msg)
  } catch (error) {
    return error.message
  }
}
