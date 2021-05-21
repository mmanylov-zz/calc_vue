<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <b-form-input v-model="x" placeholder="Enter first integer"></b-form-input>
        <b-form-input v-model="y" placeholder="Enter second integer"></b-form-input>
        <b-button variant="outline-primary" @click="calculate">Calculate the sum of both</b-button>
        <div>Sum:{{sum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: mapState({
      sum: state => state.sum
    }),
    methods: {
      ...mapActions(['calculate'])
    }
  }
</script>
