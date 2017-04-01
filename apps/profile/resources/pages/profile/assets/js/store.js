import coreModules from 'viender_core/js/store/modules.js';

import questionList from 'viender_socialite/core/js/store/modules/questionList';
import editor from 'viender_socialite/core/js/store/modules/editor';
import feed from 'viender_socialite/core/js/store/modules/feed';
import userStats from 'viender_profile/core/js/store/modules/userStats';
import followingList from 'viender_profile/core/js/store/modules/followingList';
import followerList from 'viender_profile/core/js/store/modules/followerList';
import topicList from 'viender_profile/core/js/store/modules/topicList';

export default new Vuex.Store({
  modules: Object.assign(coreModules, {
    questionList: questionList,
    editor: editor,
    feed: feed,
    userStats: userStats,
    followingList: followingList,
    followerList: followerList,
    topicList: topicList,
  }),

  actions: require('viender_socialite/core/js/store//actions.js'),
});
