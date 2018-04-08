<template>
  <svg
    v-if="value"
    v-html="inner(value)"
    viewBox="0 0 24 24" />
</template>

<script>
import {inner} from 'gridy-avatars'

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    inner
  }
}
</script>
