import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const endpoint_url = 'http://127.0.0.1:8081'

const store = new Vuex.Store({
    state: {
        rows: []
    },
    mutations: {
        setAll(state, rows) {
            state.rows = rows
        }
    },
    actions: {
        async getData({commit}) {
                const {data, status} = await axios.get(endpoint_url);
                if (status == 200) {
                    commit('setAll', data);
                    return true;
                }
            return false;
        }
    }
  })

export default store;
