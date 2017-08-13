import Vuex from 'vuex';
import coreModules from 'viender_core/js/store/modules.js';

export default {
  modules: Object.assign(coreModules, {

  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
};
