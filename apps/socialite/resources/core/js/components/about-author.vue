<template>
    <div class="about-author" @click.stop="">
        <div style="padding: 10px;">
            <span>ABOUT THE AUTHOR</span>
        </div>
        <div>
            <ul class="collection" style="border-left: 0; border-right: 0; border-bottom: 0; margin-bottom: 0; margin-top: 0;">
                <li class="collection-item avatar" style="min-height: 53px;">
                    <img :src="$viender.helpers.getUrl('avatar', user)" alt="" class="circle">
                    <a :href="$viender.helpers.getUrl('self_html', user)"  style="font-weight: bold;">
                        <span class="answer-content-owner">{{ user.name }}</span>
                    </a>
                </li>
            </ul>
            <div style="padding: 10px;">
                <div class="author-detail" v-if="user.location">
                    <div class="author-detail-icon">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <span>Live in {{ user.location }}</span>
                </div>
                <div class="author-detail">
                    <div class="author-detail-icon">
                        <i class="fa fa-eye" aria-hidden="true"></i>
                    </div>
                    <span>{{ user.answer_views }} answers views</span>
                </div>
            </div>
        </div>
        <div style="padding: 10px;" v-if="user.id !== authUserId">
            <follow-button :followed="followed" :followee_id="user.id" :url="followUrl"></follow-button>
        </div>
    </div>
</template>

<script>
import FollowButton from 'viender_follow/core/js/components/follow-button';

export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    components: {
        FollowButton,
    },

    data() {
        return {
            requesting: false,
            followed: false,
        };
    },

    computed: {
        authUserId() {
            return window.treasure.user.id;
        },

        followUrl() {
            return window.api(`users/${window.treasure.user.login}/followings`);
        },
    },

    methods: {
        checkFollowingStatus(user) {
            console.log(user);
            axios.get(api(`users/${window.treasure.user.login}/followers/${user.login}/check`))
            .then((res) => {
                this.followed = res.data.following_status;
            });
        },

        follow() {
            const self = this;

            if (self.requesting) return;

            self.requesting = true;

            axios.post(self.$viender.helpers.getUrl('follow', self.user), {'followee_id': self.user.id})
                .then((response) => {
                    self.followed = ! self.followed;
                    self.requesting = false;
                })
                .catch((error) => {
                    if (error.response.status == 401) {
                        document.location = '?auth=1';
                    }
                    self.requesting = false;
            });
        },
    },
};
</script>

<style>
    .author-detail {
        position: relative;
        padding-left: 30px;
        padding-bottom: 5px;
        padding-top: 5px;
    }

    .author-detail-icon {
        width: 30px;
        text-align: center;
        position: absolute;
        display: inline-block;
        left: 0;
    }
</style>
