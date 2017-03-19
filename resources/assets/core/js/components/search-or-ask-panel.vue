<template>
	<div class="overlay" v-show="showPanel">
		<div class="container">
			<div class="row overlay-header">
				<div class="col s12">
					<input type="text">	
				</div>
			</div>
			<div class="row">
				<div class="col s12">
					Body
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		showPanel() {
			return this.$store.state.searchOrAskPanel.showPanel;
		}
	}
}
</script>

<style>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100%;
	overflow: scroll;
	z-index: 1042;
	background-color: white;
}

.overlay-header {
	background-color: #0097a7;
	position: absolute;
	left: 0;
	right: 0;
}

.overlay-header input{
	background-color: white;
}
</style>