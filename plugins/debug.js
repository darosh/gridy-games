const debug = process.env.NODE_ENV !== 'production'

if (debug) {
  require('../plugins/lib').Info.wip = true
}
