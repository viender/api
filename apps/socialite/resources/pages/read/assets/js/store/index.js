module.exports = new Vuex.Store({
  modules: {
    feed: require('./modules/feed')
  },

  actions: require('./actions.js'),

  mutations: require('./mutations.js')
})