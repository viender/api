import Vue from 'vue';
import Vuex from 'vuex';
import answer from './modules/answer';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    answer: answer
  },

  actions: require('./actions.js'),
});