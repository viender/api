import Vue from 'vue';
import Vuex from 'vuex';
import coreModules from 'viender_core/js/store/modules.js';

import questionList from 'viender_socialite/core/js/store/modules/questionList';
import editor from 'viender_socialite/core/js/store/modules/editor';
import feed from 'viender_socialite/core/js/store/modules/feed';
import userStats from 'viender_profile/core/js/store/modules/userStats';
import followerList from 'viender_profile/core/js/store/modules/followerList';

export default {
  modules: Object.assign(coreModules, {
    questionList: questionList,
    editor: editor,
    feed: feed,
    userStats: userStats,
    followerList: followerList,
  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
};
