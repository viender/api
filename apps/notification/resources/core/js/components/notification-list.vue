<template>
    <div class="notificationList">
        <notification-card v-for="notification in notifications" :notification="notification"></notification-card>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import Vuex from 'vuex';

export default {
    props: ['initialNotifications', 'notificationsUrl'],

    created() {
        this.$store.commit(`notifications/${types.SET_URL}`, {url: this.notificationsUrl});
        this.$store.dispatch('notifications/fetchNotifications');
    },

    computed: Object.assign(
        Vuex.mapState('notifications', [
            'notifications',
            'page',
            'totalPages',
        ]),
    ),
};
</script>

<style>
    .notificationList {
        height: 100%;
        overflow-y: auto;
    }
</style>
