import urlHelpers from '../helpers/url';
import styleHelpers from '../helpers/style';
import eventHelpers from '../helpers/event';

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
			urlHelpers,
            styleHelpers,
            eventHelpers
		);

		Vue.prototype.$viender.helpers.fetchAuthenticatedUser = function fetchAuthenticatedUser(argument) {
			axios.get(api('/user'), {})
			.then(function (response) {
			    treasure.user = response.data;
			    Vue.prototype.$viender.user = response.data;
			    document.dispatchEvent(userFetched);
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
