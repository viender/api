import Vue from 'vue';
import Vuex from 'vuex';
import answer from 'viender_socialite/core/js/store/modules/answer';
import editor from 'viender_socialite/core/js/store/modules/editor';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    answer: answer,
    editor: editor
  },

  actions: require('viender_socialite/core/js/store//actions.js'),
});