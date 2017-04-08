<template>
	<div class="overlay" v-show="showPanel">
		<div class="container">
			<div class="row overlay-header">
				<div class="col s12">
					<div class="back-button" @click="hidePanel()">
						<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
					</div>
					<form class="search-bar">
						<input ref="searchBar" type="text" :value="searchText" @input="updateSearchText">
					</form>
				</div>
			</div>
			<div class="row" style="margin-top: 62px;">
				<div class="col s12" style="border-bottom: 1px solid #f5f5f5; padding-bottom: 10px; padding-left: 0;">
					<div>
						<span>Don't see your question?</span>
						<button
                            class="btn"
                            style="line-height: 20px; padding-left: 5px; padding-right: 5px; float: right; margin-top: -8px;"
                            @click="setShowCreateQuestionOverlay(true)"
                            >
                            Add it
                        </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';
import setSearchTextMixin from '../mixins/setSearchTextMixin';

export default {
    mixins: [setSearchTextMixin],

	computed: Object.assign(Vuex.mapState('searchOrAskOverlay', [
        'searchText',
    ]), Vuex.mapState('searchOrAskPanel', [
        'showPanel',
    ]), {
        showCreateQuestionOverlay() {
            return this.$store.state.searchOrAskOverlay.show;
        }
    }),

	watch: {
		showPanel(newShowPanel) {
			let _this = this;

			if(newShowPanel) {
				if(_this.$refs.searchBar) {
					Vue.nextTick(function () {
						_this.$refs.searchBar.focus();
					});
				}
			}
		}
	},

	methods: {
		hidePanel() {
			this.$store.commit(`searchOrAskPanel/${types.SET_SHOW_PANEL}`, false);
		},
        setShowCreateQuestionOverlay(show) {
            this.$store.commit(`searchOrAskOverlay/${types.SET_SHOW}`, show);
        },
	}
}
</script>
