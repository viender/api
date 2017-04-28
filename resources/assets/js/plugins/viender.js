/* eslint no-param-reassign: ["error", { "props": false } ] */

import urlHelpers from '../helpers/url';
import styleHelpers from '../helpers/style';
import eventHelpers from '../helpers/event';

const guestUrls = [
  window.url('login'),
  window.url('register'),
];

const userFetched = new Event('userFetched');

export default {
  install(Vue) {
    if (!Vue.prototype.$viender) Vue.prototype.$viender = {};

    Vue.prototype.$viender.treasure = window.treasure;

    Vue.prototype.$viender.helpers = Object.assign(
      urlHelpers,
      styleHelpers,
      eventHelpers,
    );

    Vue.prototype.$viender.helpers.fetchAuthenticatedUser = function fetchAuthenticatedUser() {
      axios.get(window.api('/user'), {})
      .then((response) => {
        treasure.user = response.data;
        Vue.prototype.$viender.user = response.data;
        document.dispatchEvent(userFetched);

        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js');
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          navigator.serviceWorker.getRegistration().then((r) => {
            r.unregister();
          });

          if (guestUrls.indexOf(window.location.href) === -1) {
            document.location = window.url('login');
          }
        }
      });
    };

    Vue.prototype.$viender.helpers.fetchAuthenticatedUser();
  },
};
