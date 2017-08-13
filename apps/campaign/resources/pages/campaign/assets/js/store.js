import Vue from 'vue';
import Vuex from 'vuex';
import coreModules from 'viender_core/js/store/modules.js';

Vue.use(Vuex);

export default {
  modules: Object.assign(coreModules, {

  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
};
