<template>
	<span class="profileNavigation-value">{{ followingCountx }}</span>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
	props: ['followingCount'],

	computed: {
		followingCountx() {
			return this.$store.state.userStats.followingCount;
		}
	},

	mounted() {
		this.$emit('mounted');
		this.$store.commit('userStats/' + types.SET_FOLLOWING_COUNT, this.followingCount);
	}
}
</script>
