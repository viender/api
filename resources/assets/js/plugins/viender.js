import helpers from '../helpers/url';

window.guestUrls = [
	url('login'),
	url('register'),
];

const userFetched = new Event('userFetched');

export default {
	install(Vue, options) {
		if(! Vue.prototype.$viender) Vue.prototype.$viender = {};

		Vue.prototype.$viender.treasure = window.treasure;

		Vue.prototype.$viender.helpers = Object.assign(
			helpers
		);

		Vue.prototype.$viender.helpers.fetchAuthenticatedUser = function fetchAuthenticatedUser(argument) {
			axios.get(api('/user'), {})
			.then(function (response) {
			    treasure.user = response.data;
			    Vue.prototype.$viender.user = response.data;
			    document.dispatchEvent(userFetched);

	            if ('serviceWorker' in navigator) {
		            window.addEventListener('load', function() {
		                navigator.serviceWorker.register('/sw.js').then(function(registration) {
		                    // Registration was successful
		                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
		                }).catch(function(err) {
		                    // registration failed :(
		                    console.log('ServiceWorker registration failed: ', err);
		                });
		            });
		        }
			})
			.catch(function (error) {
			     if (error.response.status == 401) {
					if (guestUrls.indexOf(window.location.href) == -1) {
			    		document.location = url('login');
					}
			    }
			});
		}

		Vue.prototype.$viender.helpers.fetchAuthenticatedUser();
	}
}
