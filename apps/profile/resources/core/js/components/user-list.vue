<template>
	<div>
		<user-card v-for="user in users" :user="user"></user-card>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
	props: ['url'],

	computed: {
		users() {
			return this.$store.state.userList.users;
		},
	},

	created() {
		this.$store.commit('userList/' + types.SET_URL, this.url);
		this.$store.dispatch('userList/fetchData');
	}
}
</script>
