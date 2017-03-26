import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: Object.assign(coreModules, {

  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
});
