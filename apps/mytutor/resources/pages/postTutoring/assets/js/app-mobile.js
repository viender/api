
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

Vue.component('tutoring-table', require('viender_mytutor/core/js/components/tutoring-table.vue'));
Vue.component('tutoring-row', require('viender_mytutor/core/js/components/tutoring-row.vue'));

const feed = new Vue({
    el: '#app',
});