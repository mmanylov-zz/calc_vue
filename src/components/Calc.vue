<template>
  <div class="container">
      <div class="row">
    <b-button variant="outline-primary" @click="getData">Search for duplicate hosts</b-button>
  </div>
  <div class="row">
    <b-table striped hover :items="items"></b-table>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: mapState({
      items: state => state.rows
    }),
    methods: {
      ...mapActions(['getData'])
    }
  }
</script>
