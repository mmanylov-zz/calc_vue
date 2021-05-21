<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <b-form-input v-model.number="x" placeholder="Enter first integer"></b-form-input>
        <b-form-input v-model.number="y" placeholder="Enter second integer"></b-form-input>
        <b-button variant="outline-primary" @click="submit">Calculate the sum of both</b-button>
        <div>Sum: {{sum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    data: function() {
      return {
        x: 0,
        y: 0
      }
    },
    computed: mapState({
      sum: state => state.sum,
    }),
    methods: {
      submit() {
          this.$store.dispatch('calculate', {x: this.x, y: this.y});
      },
    }
  }
</script>
