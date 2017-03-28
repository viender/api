<template>
	<div class="userCard">
		<ul class="collection">
			<li class="collection-item avatar">
				<img :src="getUrl('avatar', user)" alt="" class="circle">
				<a :href="getUrl('self_html', user)">
					<span class="card-title">{{ user.name }}</span>
				</a>
				<div v-if="$viender.treasure.user ? $viender.treasure.user.id !== user.id : false">
					<button class="btn followButton" v-show="! followed" @click="follow()">Follow</button>
					<button class="btn unfollowButton" v-show="followed" @click="unfollow()">Unfollow</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
	props: ['user'],

    mixins: [require('viender_core/js/mixins/urlHelper')],

    data() {
		return {
			requesting: false,
			followed: true,
		}
	},

	created() {
		this.followed = this.user.followed;
	},

    methods: {
    	follow() {
    		var _this = this;

    		if (_this.requesting) return;

    		_this.requesting = true;

    		axios.post(_this.getUrl('follow', _this.user), {'followee_id': _this.user.id})
				.then(function (response) {
					_this.followed = ! _this.followed;

					if (_this.followed) {
						_this.$store.commit('userStats/' + types.INCREMENT_FOLLOWING_COUNT);
					} else {
						_this.$store.commit('userStats/' + types.DECREMENT_FOLLOWING_COUNT);
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
    }
}
</script>
