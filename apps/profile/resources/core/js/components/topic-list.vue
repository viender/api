<template>
	<div class="row topic-list">
		<div class="col s6" v-for="topic in topics">
			<topic-card :topic="topic"></topic-card>
			<button v-show="! requesting && page < totalPages" style="width: 100%; padding-left: 0;" class="btn btn-default" @click="fetchData()">Load more</button>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import * as types from '../store/mutation-types';

export default {
	props: ['url'],

	computed: Object.assign(
		mapState('topicList', [
		  'page',
		  'totalPages',
		  'requesting',
		  'topics',
		])
	),

	created() {
		this.$store.commit('topicList/' + types.SET_URL, this.url);
		this.$store.dispatch('topicList/fetchData');
	},

	methods: Object.assign(
		mapActions('topicList', [
			'fetchData',
		])
	),
}
</script>
