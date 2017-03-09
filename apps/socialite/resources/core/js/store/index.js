import Vue from 'vue';
import Vuex from 'vuex';
import answer from './modules/answer';
import editor from './modules/editor';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    answer: answer,
    editor: editor
  },

  actions: require('./actions.js'),
});