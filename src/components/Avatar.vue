<template>
  <svg
    v-if="value"
    viewBox="0 0 24 24"
    v-html="inner(value)" />
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
