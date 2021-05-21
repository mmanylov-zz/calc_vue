import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const endpoint_url = 'http://127.0.0.1:8081'

const store = new Vuex.Store({
    state: {
        sum: null
    },
    mutations: {
        setSum(state, sum) {
            state.sum = sum
        }
    },
    actions: {
        async calculate({commit}) {
                const {data, status} = await axios.get(endpoint_url);
                if (status == 200) {
                    commit('setSum', data);
                    return true;
                }
            return false;
        }
    }
  })

export default store;
