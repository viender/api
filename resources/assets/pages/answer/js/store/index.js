module.exports = new Vuex.Store({
  modules: {
    feed: require('viender_socialite/store/modules/feed.js')
  },

  actions: require('./actions.js'),

  mutations: require('./mutations.js')
})