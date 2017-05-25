<template>
    <div class="notificationList">
        <div class="notificationList-action" :class="actionClass" @click="handleActionClick()">{{ actionText }}</div>
        <notification-card v-for="notification in notifications" :notification="notification"></notification-card>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import Vuex from 'vuex';

export default {
    props: ['initialNotifications', 'notificationsUrl'],

    data() {
        return {
            currentIndex: 0,
        };
    },

    created() {
        this.$store.commit(`notifications/${types.SET_URL}`, {url: this.notificationsUrl});
        this.$store.commit(`notifications/${types.SET_READ_ALL_URL}`, {url: this.notificationsUrl});
        this.$store.dispatch('notifications/readSessionReadNotifs');
        this.$store.dispatch('notifications/fetchNotifications');
        this.$store.dispatch('notifications/getNotificationCount');
    },

    computed: Object.assign(
        Vuex.mapState('notifications', [
            'notifications',
            'page',
            'totalPages',
            'notificationCount',
        ]), {
            actionClass() {
                return {
                    disable: this.notifications.length === 0 || this.notificationCount === 0,
                };
            },

            actionText() {
                let text = '';

                if (this.notifications.length === 0) {
                    text = 'You Have No Notifications';
                    this.currentIndex = 1;
                } else if (this.notificationCount === 0) {
                    text = 'All Notifications Read';
                    this.currentIndex = 2;
                } else {
                    text = 'Mark All As Read';
                    this.currentIndex = 3;
                }

                return text;
            },
        }
    ),

    methods: Object.assign(
        Vuex.mapActions('notifications', [
            'setAllAsRead',
        ]), {
            handleActionClick() {
                if (this.currentIndex === 3) {
                    this.setAllAsRead();
                }
            },
        }

    ),
};
</script>

<style>
    .notificationList {
        height: 100%;
        overflow-y: auto;
    }

    .notificationList-action.disable {
        background-color: #eee;
        cursor: initial;
    }

    .notificationList-action {
        margin: 20px;
        padding: 10px 20px;
        background-color: #dfeffa;
        text-align: center;
        color: #2b6dad;
        font-weight: 600;
        cursor: pointer;
    }
</style>
