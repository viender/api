export default {
	install(Vue, options) {
		if(! Vue.prototype.$viender) Vue.prototype.$viender = {};
		Vue.prototype.$viender.treasure = window.treasure;
	}
}
