<template>
	<div @click="showPanel()" style="cursor: pointer;">
		<slot></slot>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
	methods: {
		showPanel() {
			this.$store.commit('searchOrAskPanel/' + types.SET_SHOW_PANEL, true);
		}
	}
}
</script>