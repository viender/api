<template>
    <div class="notification" :class="notification.read_at ? 'read' : ''">
        <div class="notification-user-avatar">
            <img :src="$viender.helpers.getUrl('avatar', notification.subject)" alt="avatar">
        </div>
        <div class="notification-content">
            <div class="notification-content-body">
                <strong>{{ notification.subject.name }}</strong>
                <span>{{ typeText }}</span>
                <span class="notification-content-body-objectText">{{ objectText }}</span>
                <span class="notification-content-body-notificationTime">{{ notificationTime }}</span>
            </div>
            <div class="notification-content-footer">

            </div>
        </div>
        <span class="notification-link-overlay" @click.prevent="readNotification($event)"></span>
    </div>
</template>

<script>
export default {
    props: ['notification'],

    data() {
        return {
            requesting: false,
        };
    },

    computed: {
        url() {
            return this.$viender.helpers.getUrl('self', this.notification);
        },

        type() {
            const typePath = this.notification.type.split('\\');
            return typePath[typePath.length - 1];
        },

        typeText() {
            let message = null;

            switch (this.type) {
                case 'UpvotableUpvotedNotification':
                    message = 'upvoted:';
                    break;
                case 'CommentableCommentedNotification':
                    message = 'commented on';
                    if (this.notification.object.type === 'answer') {
                        message = `${message} answer of`;
                    }
                    message = `${message}:`;
                    break;
                case 'QuestionAnsweredNotification':
                    message = 'answered:';
                    break;
                default:
                    console.warn('Notification type not supported.');
            }

            return message;
        },

        objectText() {
            let message = null;

            switch (this.notification.object.type) {
                case 'user':
                    message = this.notification.object.name;
                    break;
                case 'answer':
                    message = this.notification.object.question.title;
                    break;
                case 'question':
                    message = this.notification.object.title;
                    break;
                case 'comment':
                    switch (this.notification.object.commentable.type) {
                        case 'user':
                            message = this.notification.object.commentable.name;
                            break;
                        case 'answer':
                            message = this.notification.object.commentable.question_title;
                            break;
                        case 'question':
                            message = this.notification.object.commentable.title;
                            break;
                        case 'comment':
                            message = this.notification.object.commentable.question_title;
                        default:
                            break;
                    }
                    break;
                default:
                    console.warn('Notification object type not supported.');
            }

            return message;
        },

        notificationUrl() {
            let url = null;

            switch (this.type) {
                case 'UpvotableUpvotedNotification':
                    url = this.$viender.helpers.getUrl('self_html', this.notification.object);
                    break;
                case 'CommentableCommentedNotification':
                    const commentable = this.notification.object;

                    url = this.$viender.helpers.getUrl('self_html', commentable);
                    break;
                case 'QuestionAnsweredNotification':
                    url = this.$viender.helpers.getUrl('self_html', this.notification.object);
                    break;
                default:
                    console.warn('Notification type not supported.');
            }

            return url;
        },

        notificationTime() {
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            const months = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'];

            const date = moment(this.notification.created_at.date);

            let notificationTime = '';

            if (date.isSame(moment(), 'week')) {
                notificationTime = days[date.day()];
            } else if (date.isSame(moment(), 'year')) {
                notificationTime = `${months[date.month()]} ${date.date()}`;
            } else {
                notificationTime = `${months[date.month()]} ${date.date()}, ${date.year()}`;
            }

            return notificationTime;
        },
    },

    methods: {
        readNotification(e) {
            if(this.requesting) return;

            if(this.notification.read_at)
                window.location.href = this.notificationUrl;

            this.requesting = true;

            axios.post(this.url, {
                _method: 'PUT',
            })
            .then((response) => {
                const readNotifsString = sessionStorage.getItem('viender.readNotifs') || '{"data": []}';
                const readNotifs = JSON.parse(readNotifsString);
                readNotifs.data.push(this.notification.id);
                window.sessionStorage.setItem('viender.readNotifs', JSON.stringify(readNotifs));

                this.notification.read_at = true;
                window.location.href = this.notificationUrl;
                this.requesting = false;
            })
            .catch((error) => {
                this.requesting = false;
            });
        },
    },
};
</script>

<style>
    .notification {
        position: relative;
        background-color: #efefef;
        padding: 20px 10px 20px 20px;
        border-bottom: solid 1px #eee;
    }

    .notification.read {
        background-color: #fff;
    }

    .notification-user-avatar {
        position: absolute;
    }

    .notification-user-avatar img {
        border-radius: 50%;
        width: 36px;
        height: 36px;
    }

    .notification-content {
        padding-left: 46px;
        min-height: 48px;
    }

    .notification-content-body {

    }

    .notification-content-body-objectText {
        color: #039be5;
    }

    .notification-content-body-notificationTime {
        color: #657786;
    }

    .notification-content-footer {

    }

    .notification-link-overlay {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
    }

</style>
