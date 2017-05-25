<template>
    <div class="notificationList">
        <div class="notificationList-action" @click="setAllAsRead()">Mark All As Read</div>
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
        this.$store.commit(`notifications/${types.SET_READ_ALL_URL}`, {url: this.notificationsUrl});
        this.$store.dispatch('notifications/readSessionReadNotifs');
        this.$store.dispatch('notifications/fetchNotifications');
    },

    computed: Object.assign(
        Vuex.mapState('notifications', [
            'notifications',
            'page',
            'totalPages',
        ]),
    ),

    methods: Object.assign(
        Vuex.mapActions('notifications', [
            'setAllAsRead',
        ]),
    ),
};
</script>

<style>
    .notificationList {
        height: 100%;
        overflow-y: auto;
    }

    .notificationList-action {
        margin: 20px;
        padding: 10px 20px;
        background-color: #dfeffa;
        text-align: center;
        color: #2b6dad;
        font-weight: 600;
        cursor: pointer;;
    }
</style>
