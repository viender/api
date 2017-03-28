<template>
	<div class="followUserButton follow-user-button">
		<button class="btn" @click="follow()" v-if="! user.followed">Follow</button>
		<button class="btn followed" @click="unfollow()" v-else>Unfollow</button>
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
			}
		}
	},

	mounted() {
		this.user.followed = this.followed ? this.followed : false;
	},

	methods: {
		follow() {
    		var _this = this;

    		if (_this.requesting) return;

    		_this.requesting = true;

			axios.post(_this.url, {'followee_id': _this.followee_id})
				.then(function (response) {
					_this.user.followed = ! _this.user.followed;

					if (_this.user.followed) {
						_this.$store.commit('userStats/' + types.INCREMENT_FOLLOWER_COUNT);
					} else {
						_this.$store.commit('userStats/' + types.DECREMENT_FOLLOWER_COUNT);
					}
					
				    _this.requesting = false;
				})
				.catch(function (error) {
				    if (error.response.status == 401) {
				    	document.location = url('login');
				    }
				    _this.requesting = false;
			});
		},

		unfollow() {
			this.follow();
		},
	},
}
</script>

<style>
	.follow-user-button {
		display: inline-block;

	}

	.follow-user-button	button.followed {
		background-color: grey;
	}
</style>
