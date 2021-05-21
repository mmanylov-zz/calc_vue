import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const endpoint_url = 'http://127.0.0.1:8000/'

const store = new Vuex.Store({
    state: {
        sum: null,
    },
    mutations: {
        setSum(state, sum) {
            state.sum = sum
        }
    },
    actions: {
        async calculate({commit}, payload) {
                const {data, status} = await axios.post(endpoint_url, {"x": payload.x, "y": payload.y});
                if (status == 200) {
                    console.log(data)
                    commit('setSum', data.result);
                    return true;
                }
            return false;
        }
    }
  })

export default store;
