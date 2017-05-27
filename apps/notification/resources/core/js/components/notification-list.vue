<template>
    <div class="notificationList">
        <div class="notificationList-action" :class="actionClass" @click="handleActionClick()">{{ actionText }}</div>
        <notification-card v-for="notification in notifications" :notification="notification"></notification-card>
        <div class="preloader preloader-wrapper small active" v-show="requesting">
            <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
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
        const self = this;

        this.$store.commit(`notifications/${types.SET_URL}`, {url: this.notificationsUrl});
        this.$store.commit(`notifications/${types.SET_READ_ALL_URL}`, {url: this.notificationsUrl});
        this.$store.dispatch('notifications/readSessionReadNotifs');
        this.fetchNotifications();
        this.$store.dispatch('notifications/getNotificationCount');

        $(window).on('scroll', function() {
            if($(window).scrollTop() + $(window).height() >= $(document).height() - 1000) {
                if (self.page <= self.totalPages) {
                    self.fetchNotifications();
                }
            }
        });
    },

    computed: Object.assign(
        Vuex.mapState('notifications', [
            'requesting',
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

            fetchNotifications() {
                this.$store.dispatch('notifications/fetchNotifications');
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
