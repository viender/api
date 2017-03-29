import helpers from '../helpers/url';

export default {
	install(Vue, options) {
		if(! Vue.prototype.$viender) Vue.prototype.$viender = {};

		Vue.prototype.$viender.treasure = window.treasure;

		Vue.prototype.$viender.helpers = Object.assign(
			helpers
		);

		const userFetched = new Event('userFetched');

		axios.get(api('/user'), {})
		.then(function (response) {
		    treasure.user = response.data;
		    Vue.prototype.$viender.user = response.data;
		    document.dispatchEvent(userFetched);
		})
		.catch(function (error) {
		     if (error.response.status == 401) {
				if (! guestUrls.include(window.location.href)) {
		    		document.location = url('login');
				}
		    }
		});
	}
}
