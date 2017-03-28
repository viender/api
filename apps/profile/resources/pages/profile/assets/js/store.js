import Vue from 'vue';
import Vuex from 'vuex';
import coreModules from 'viender_core/js/store/modules.js';

import questionList from 'viender_socialite/core/js/store/modules/questionList';
import editor from 'viender_socialite/core/js/store/modules/editor';
import feed from 'viender_socialite/core/js/store/modules/feed';
import userStats from 'viender_profile/core/js/store/modules/userStats';
import userList from 'viender_profile/core/js/store/modules/userList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: Object.assign(coreModules, {
    questionList: questionList,
    editor: editor,
    feed: feed,
    userStats: userStats,
    userList: userList,
  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
});
