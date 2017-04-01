/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.withCredentials = true;

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');

window.Vuex = require('vuex');

window.Viender = require('./plugins/viender').default;

window.Vue.use(window.Viender);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/**
 * Helpers
 */

require('./helpers/url.js');

/**
 * Materialize
 */

window.jQuery = window.$ = require('jquery');

require('materialize-css/dist/js/materialize');

require('./callbacks');

/**
 * Services
 */
require('./services');


/**
 * Guest Urls
 */

let guestUrls = [
	url('login'),
	url('register'),
];
