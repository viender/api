import coreModules from 'viender_core/js/store/modules.js';
import moreMenu from 'viender_socialite/core/js/store/modules/moreMenu';

export default {
  modules: Object.assign(coreModules, {
    moreMenu,
  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
};
