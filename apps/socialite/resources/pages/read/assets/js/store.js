import coreModules from 'viender_core/js/store/modules.js';
import questionList from 'viender_socialite/core/js/store/modules/questionList';
import editor from 'viender_socialite/core/js/store/modules/editor';
import feed from 'viender_socialite/core/js/store/modules/feed';
import credentials from 'viender_credential/core/js/store/modules/credentials';
import moreMenu from 'viender_socialite/core/js/store/modules/moreMenu';

export default new Vuex.Store({
  modules: Object.assign(coreModules, {
    questionList,
    editor,
    feed,
    credentials,
    moreMenu,
  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
});
