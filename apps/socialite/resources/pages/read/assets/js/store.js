import coreModules from 'viender_core/js/store/modules.js';
import questionList from 'viender_socialite/core/js/store/modules/questionList';
import editor from 'viender_socialite/core/js/store/modules/editor';
import feed from 'viender_socialite/core/js/store/modules/feed';

export default new Vuex.Store({
  modules: Object.assign(coreModules, {
    questionList: questionList,
    editor: editor,
    feed: feed,
  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
});
