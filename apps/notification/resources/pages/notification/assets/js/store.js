import Vuex from 'vuex';
import coreModules from 'viender_core/js/store/modules';
import notifications from 'viender_notification/core/js/store/modules/notifications';

export default new Vuex.Store({
    modules: Object.assign(coreModules, {
        notifications: notifications
    }),

    actions: require('viender_notification/core/js/store/actions'),
});
