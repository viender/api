<template>
	<span class="profileNavigation-value">{{ topicCountx }}</span>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
	props: ['topicCount'],

	computed: {
		topicCountx() {
			return this.$store.state.userStats.topicCount;
		}
	},

	mounted() {
		this.$emit('mounted');
		this.$store.commit('userStats/' + types.SET_TOPIC_COUNT, this.topicCount);
	}
}
</script>
