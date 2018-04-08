<template>
  <v-container
    grid-list-lg
    fluid>
    <v-layout
      row
      wrap>
      <v-flex
        xs12
        sm4
        md3
        lg2>
        <v-card>
          <v-card-title>
            <div
              class="title"
              style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">
              {{ user.name || ('Guest') }}
            </div>
          </v-card-title>
          <v-card-media height="144px">
            <v-icon>person</v-icon>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { usersRef } from '../services/online'

export default {
  beforeCreate () {
    this.$bindAsObject('user', usersRef.child(this.$route.params.id))
  }
}
</script>

<style scoped>
*>>>.card__media__content .icon {
  width: 100%;
  display: block;
}

*>>>.card__media__content .icon svg {
  width: 100%;
  display: block;
  height: 144px;
}
</style>
