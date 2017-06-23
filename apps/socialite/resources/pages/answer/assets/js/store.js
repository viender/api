import coreModules from 'viender_core/js/store/modules.js';

import questionList from 'viender_socialite/core/js/store/modules/questionList';
import editor from 'viender_socialite/core/js/store/modules/editor';
import moreMenu from 'viender_socialite/core/js/store/modules/moreMenu';
import credentials from 'viender_credential/core/js/store/modules/credentials';

export default new Vuex.Store({
  modules: Object.assign(coreModules, {
    questionList,
    editor,
    credentials,
    moreMenu,
  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
});
