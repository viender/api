
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

Vue.component('comment', require('./components/comment.vue'));
Vue.component('comment-list', require('./components/comment-list.vue'));
Vue.component('comment-create-form', require('./components/comment-create-form.vue'));
Vue.component('answer', require('./components/answer.vue'));
Vue.component('feed-list', require('./components/feed-list.vue'));

const feed = new Vue({
    el: '#app',

    store: require('./store/index')
});