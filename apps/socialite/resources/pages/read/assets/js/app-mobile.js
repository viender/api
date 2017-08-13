import store from './store';

/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


window.$app = () => {
    Vue.component('comment', require('viender_socialite/core/js/components/comment.vue'));
    Vue.component('comment-list', require('viender_socialite/core/js/components/comment-list.vue'));
    Vue.component('comment-create-form', require('viender_socialite/core/js/components/comment-create-form.vue'));
    Vue.component('answer-create-modal', require('viender_socialite/core/js/components/answer-create-modal.vue'));
    Vue.component('answer-preview', require('viender_socialite/core/js/components/answer-preview.vue'));
    Vue.component('feed-list', require('viender_socialite/core/js/components/feed-list.vue'));
    Vue.component('answer', require('viender_socialite/core/js/components/answer.vue'));
    Vue.component('answer-show-modal', require('viender_socialite/core/js/components/answer-show-modal.vue'));
    Vue.component('more-menu', require('viender_socialite/core/js/components/more-menu.vue'));
    Vue.component('sort-button', require('viender_socialite/core/js/components/sort-button.vue'));

    const feed = new Vue({
        el: '#app',

        store: new Vuex.Store(store),

        created() {
            this.$store.commit('questionList/SET_CREATE_MODAL_METHOD', {method: 'PUT'});
        },

        mounted() {
            this.$store.dispatch('navigation/getNotificationCount');
        },

        methods: {
            hideActiveMoreMenu() {
                this.$store.dispatch('moreMenu/closeActiveMoreMenu');
            },
        },
    });
};
