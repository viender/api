<template>
	<div>
		<user-card v-for="user in followings" :user="user"></user-card>
        <button v-show="! requesting && page < totalPages" style="width: 100%; padding-left: 0;" class="btn btn-default" @click="fetchData()">Load more</button>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import * as types from '../store/mutation-types';

export default {
	props: ['url'],

	computed: Object.assign(
		mapState('followingList', [
		  'requesting',
		  'followings',
		  'page',
		  'totalPages',
		])
	),

	created() {
		this.$store.commit('followingList/' + types.SET_URL, this.url);
		this.fetchData();
	},

	methods: Object.assign(
		mapActions('followingList', [
			'fetchData',
		])
	),
}
</script>
