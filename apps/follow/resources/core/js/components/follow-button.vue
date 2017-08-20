<template>
    <div class="followButton">
        <button class="btn" @click.stop="follow()" v-if="! user.followed">Follow</button>
        <button class="btn followed" @click.stop="unfollow()" v-else>Unfollow</button>
    </div>
</template>

<script>
import * as types from 'viender_profile/core/js/store/mutation-types';

export default {
    props: ['url', 'followee_id', 'followed'],

    data() {
        return {
            requesting: false,

            user: {
                followed: false,
            },
        };
    },

    computed: {
        isFollowed() {
            return this.followed;
        },
    },

    watch: {
        isFollowed(followed) {
            this.user.followed = followed;
        },
    },

    created() {
        this.user.followed = this.followed ? this.followed : false;
    },

    mounted() {
        this.$emit('mounted');
    },

    methods: {
        follow() {
            const self = this;

            if (self.requesting) return;

            self.requesting = true;

            axios.post(self.url, {'followee_id': self.followee_id})
                .then((response) => {
                    self.user.followed = ! self.user.followed;

                    if (self.$store.state.userStats) {
                        if (self.user.followed) {
                            self.$store.commit('userStats/' + types.INCREMENT_FOLLOWER_COUNT);
                        } else {
                            self.$store.commit('userStats/' + types.DECREMENT_FOLLOWER_COUNT);
                        }
                    }

                    self.requesting = false;
                })
                .catch((error) => {
                    if (error.response.status == 401) {
                        document.location = url('login');
                    }
                    self.requesting = false;
            });
        },

        unfollow() {
            this.follow();
        },
    },
};
</script>
