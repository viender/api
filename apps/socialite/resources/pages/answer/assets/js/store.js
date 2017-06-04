import coreModules from 'viender_core/js/store/modules.js';

import questionList from 'viender_socialite/core/js/store/modules/questionList';
import editor from 'viender_socialite/core/js/store/modules/editor';
import credentialAddModal from 'viender_socialite/core/js/store/modules/credentialAddModal';

export default new Vuex.Store({
  modules: Object.assign(coreModules, {
    questionList: questionList,
    editor: editor,
    credentialAddModal: credentialAddModal,
  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
});
