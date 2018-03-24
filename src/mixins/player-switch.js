export default {
  methods: {
    playerSwitch () {
      this.$store.commit('player', {
        1: this.$store.state.player[2],
        2: this.$store.state.player[1]
      })
    }
  }
}
