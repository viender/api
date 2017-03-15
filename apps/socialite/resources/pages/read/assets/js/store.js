import Vue from 'vue';
import Vuex from 'vuex';
import questionList from 'viender_socialite/core/js/store/modules/questionList';
import editor from 'viender_socialite/core/js/store/modules/editor';
import feed from 'viender_socialite/core/js/store/modules/feed';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    questionList: questionList,
    editor: editor,
    feed: feed,
  },

  actions: require('viender_socialite/core/js/store//actions.js'),
});