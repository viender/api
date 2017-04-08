<template>
    <div>
        <ul class="collection">
            <li class="collection-item" v-for="topic in topicRecommendations">
                <a href="#" @click="selectTopic(topic)">{{ topic.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
    data() {
        return {
            topicRecommendations: [],
        }
    },

    computed: Object.assign(
        Vuex.mapState('topicRecommendation', [
            'searchText',
            'requesting',
            'url',
            'selectedTopics',
        ]),
    ),

    watch: {
        searchText() {
            var _this = this;

            if (_this.requesting) return;

            if (_this.searchText == '') {
                _this.topicRecommendations = [];
                _this.$store.commit(`topicRecommendation/${types.SET_SEARCH_RESULTS}`, []);
                _this.$store.commit(`topicRecommendation/${types.SET_SHOW}`, false);
                return;
            }

            _this.$store.commit(`topicRecommendation/${types.SET_REQUESTING}`, true);

            axios.get(_this.url, {
                params: {
                    simple: true,
                    search: _this.searchText,
                }
            })
            .then(function (response) {
                _this.topicRecommendations = response.data.data.filter(fetchedTopic => {
                    var obj = _this.selectedTopics.filter(function ( obj ) {
                        return obj.id === fetchedTopic.id;
                    })[0];

                    return typeof obj === 'undefined';
                });
                _this.$store.commit(`topicRecommendation/${types.SET_SEARCH_RESULTS}`, _this.topicRecommendations);
                _this.$store.commit(`topicRecommendation/${types.SET_SHOW}`, true);
                _this.$store.commit(`topicRecommendation/${types.SET_REQUESTING}`, false);
            })
            .catch(function (error) {
                _this.$store.commit(`topicRecommendation/${types.SET_REQUESTING}`, false);
            });
        }
    },

    methods: {
        selectTopic(topic) {
            this.$store.commit('topicRecommendation/SET_SHOW', true);
            this.$store.commit(`searchOrAskOverlay/${types.ADD_TO_SELECTED_TOPICS}`, topic);
            this.topicRecommendations = this.topicRecommendations.filter(selectedTopic => selectedTopic.id !== topic.id);
            this.$store.commit(`topicRecommendation/${types.SET_SEARCH_RESULTS}`, this.topicRecommendations);
        }
    }
}
</script>
