const vuetifyPackage = require('vuetify/package.json')

module.exports = {
  'process.env.VUETIFY_VERSION': vuetifyPackage.version,
  'process.env.REQUIRED_VUE': vuetifyPackage.peerDependencies.vue
}
