<template>
	<div class="overlay createQuestionOverlay" v-show="show">
		<div class="container">
			<div class="row overlay-header">
				<div class="col s12">
                    <form>
    					<div class="back-button" @click="SET_SHOW(false)">
    						<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
                        </div>
                        <button class="btn" style="line-height: 25px; padding-left: 5px; padding-right: 5px; float: right; margin-top: 7px; height: 25px; text-transform: none;" @click.prevent="postQuestion">Post</button>
                        <div class="row" style="margin-top: 20px;">
                            <div class="input-field col s12" style="margin-top: 30px;">
                                <input
                                    id="searchText"
                                    ref="searchBar"
                                    type="text"
                                    :value="searchText"
                                    @input="updateSearchText">
                                <label for="searchText" data-error="wrong" data-success="right">Question</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <textarea
                                    id="questionDetail"
                                    name="questionDetail"
                                    class="materialize-textarea"
                                    :value="questionDetail"
                                    @input="updateQuestionDetail"
                                    ></textarea>
                                <label for="questionDetail">Question Detail</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <div class="row" style="padding-top: 10px;">
                                    <label>Topics:</label>
                                </div>
                                <div class="row">
                                    <span class="blue white-text topic" style="display: inline-block; margin: 3px 3px 0px 0px;" v-for="topic in $store.state.searchOrAskOverlay.selectedTopics">{{ topic.name }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input
                                    id="topicSearchInput"
                                    ref="topicSearchInput"
                                    type="text"
                                    class="search-form-textfield"
                                    @keyup="$store.commit('topicRecommendation/SET_SEARCH_TEXT', $refs.topicSearchInput.value)"
                                    @focus="$store.dispatch('topicRecommendation/showTopicRecommendations')"
                                    @blur="$store.dispatch('topicRecommendation/hideTopicRecommendations')">
                                <label for="topicSearchInput">Search Topic</label>
                                <topic-recommendation class="topicRecommendation" v-show="$store.state.topicRecommendation.show && $store.state.topicRecommendation.searchResults.length > 0"></topic-recommendation>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12" style="border-bottom: 1px solid #f5f5f5; padding-bottom: 10px; padding-left: 0;">
                                <div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';
import setSearchTextMixin from '../mixins/setSearchTextMixin';
import updateQuestionDetail from '../mixins/updateQuestionDetailMixin';

export default {
    mixins: [setSearchTextMixin, updateQuestionDetail],

	computed: Object.assign(Vuex.mapState('searchOrAskOverlay', [
        'requesting',
        'show',
        'searchText',
        'questionDetail',
        'searchResults',
        'showMoreFields',
        'selectedTopics',
        'postQuestionUrl',
    ]), {

    }),

    watch: {
        show() {
            const self = this;

            if (self.show) {
                self.$nextTick(() => {
                    self.$refs.searchBar.focus();
                })
            }
        },
    },

	methods: Object.assign(Vuex.mapMutations('searchOrAskOverlay', [
        'SET_SHOW',
    ]), Vuex.mapActions('searchOrAskOverlay', [
        'postQuestion',
    ])),
}
</script>
