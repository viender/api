/* eslint no-param-reassign: ["error", { "props": false } ] */

import urlHelpers from '../helpers/url';
import styleHelpers from '../helpers/style';
import eventHelpers from '../helpers/event';
import pushStateHelpers from '../helpers/pushState';
import credentialsHelpers from '../helpers/credentials';

const guestUrls = [
    window.url('login'),
    window.url('register'),
];

const userFetched = new Event('userFetched');

export default {
    install(Vue) {
        if (!Vue.prototype.$viender) Vue.prototype.$viender = {};

        Vue.prototype.$viender.treasure = window.treasure;

        Vue.prototype.$viender.csrfToken = window.Laravel.csrfToken;

        Vue.prototype.$viender.helpers = Object.assign(
            urlHelpers,
            styleHelpers,
            eventHelpers,
            pushStateHelpers,
            credentialsHelpers,
        );

        Vue.prototype.$viender.getNotificationCount = () => {
            return new Promise((resolve, reject) => {
                axios.get(window.api('api/notifications'), {
                    params: {
                        count_only: 1,
                    },
                })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
            });
        };

        Vue.prototype.$viender.helpers.fetchAuthenticatedUser = function fetchAuthenticatedUser() {
            return new Promise((resolve, reject) => {
                if (Vue.prototype.$viender.user) {
                    resolve(Vue.prototype.$viender.user);
                } else {
                    axios.get(window.api('/user'), {})
                    .then((response) => {
                        treasure.user = response.data;
                        Vue.prototype.$viender.user = response.data;
                        document.dispatchEvent(userFetched);
                        $(document).trigger('viender.user.loaded', response.data);

                        if ('serviceWorker' in navigator) {
                            window.addEventListener('load', () => {
                                navigator.serviceWorker.register('/sw.js');
                            });
                        }

                        resolve(response.data);
                    })
                    .catch((error) => {
                        if (error.response.status === 401) {
                            navigator.serviceWorker.getRegistration().then((r) => {
                                if (r) r.unregister();
                            });

                            if (guestUrls.indexOf(window.location.href) === -1) {
                                // document.location = window.url('login');
                            }
                        }

                        reject(error);
                    });
                }
            });
        };

        Vue.prototype.$viender.helpers.fetchAuthenticatedUser();
    },
};
