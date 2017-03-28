<template>
	<div>
		<user-card v-for="user in users" :user="user"></user-card>
        <button v-show="! requesting && page < totalPages" style="width: 100%; padding-left: 0;" class="btn btn-default" @click="fetchData()">Load more</button>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
	props: ['url'],

	computed: {
		requesting() {
            return this.$store.state.followerList.requesting;
        },
        
		users() {
			return this.$store.state.followerList.followers;
		},

		page() {
            return this.$store.state.followerList.page - 1;
        },

        totalPages() {
            return this.$store.state.followerList.totalPages;
        },
	},

	created() {
		this.$store.commit('followerList/' + types.SET_URL, this.url);
		this.$store.dispatch('followerList/fetchData');
	},

	methods: {
        fetchData() {
            this.$store.dispatch('followerList/fetchData');
        },
    },
}
</script>
