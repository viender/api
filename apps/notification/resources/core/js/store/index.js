import Vue from 'vue';
import Vuex from 'vuex';
import answer from './modules/answer';
import editor from './modules/editor';
import searchOrAskPanel from 'viender_core/js/store/modules/searchOrAskPanel';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    answer: answer,
    editor: editor,
    searchOrAskPanel: searchOrAskPanel
  },

  actions: require('./actions.js'),
});