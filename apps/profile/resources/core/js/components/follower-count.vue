<template>
	<span class="profileNavigation-value">{{ followerCountx }}</span>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
	props: ['followerCount'],

	computed: {
		followerCountx() {
			return this.$store.state.userStats.followerCount;
		}
	},

	mounted() {
		this.$emit('mounted');
		this.$store.commit('userStats/' + types.SET_FOLLOWER_COUNT, this.followerCount);
	}
}
</script>
