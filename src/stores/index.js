import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state () {
    return {
      user: null
    }
  },
  mutations: {
    setUser (state,user) {
      state.user=user;
    }
  },
  actions: {
   
  },
  getters: {
    
  },
});

export default store;