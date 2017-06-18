<template>
    <elasticsearch ref="elasticsearch" :placeholder="placeholder" :params="{ searchable_type: 'topic', category_id: categoryId }" @done-typing="handleDoneTyping($event)" @fetch-success="handleSuccess()" @focus="handleFocus()" @blur="handleBlur()">
        <div slot="input-overlay" class="topic-picker-input-overlay">
            <div class="chip">
                {{ pickedTopic ? pickedTopic.name : '' }}
            <i class="close material-icons" @click="clearSelectedTopic()">close</i>
            </div>
        </div>
        <ul slot="search-results" class="search-results collection" v-show="results.length > 0 && showResults">
            <li v-for="topic in results" @click="chooseTopic(topic)" class="collection-item">
                <div class="row" style="margin: 0;">
                    <div class="col s8" style="padding: 0;">
                        {{ topic.name }}
                    </div>
                    <div class="col s4" style="padding: 0; text-align: right;">
                        <button v-if="results.indexOf(topic) === results.length - 1 && showAddTopicButton">Add Topic</button>
                    </div>
                </div>
            </li>
        </ul>
        <input type="hidden" :name="name" :value="pickedTopic ? (pickedTopic.id || pickedTopic.name) : null">
    </elasticsearch>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },

        categoryId: {
            type: Number,
            default: null,
        },

        placeholder: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            pickedTopic: null,
            showAddTopicButton: true,
            showResults: true,
            results: [],
        };
    },

    methods: {
        chooseTopic(topic) {
            this.setPickedTopic(topic);
            this.results = [];
            this.$refs.elasticsearch.setShowOverlay(true);
        },

        handleDoneTyping({searchText}) {
            if (searchText === '') {
                this.results.pop(this.results[0]);
            }

            this.$emit('done-typing', {searchText});
        },

        handleSuccess() {
            const results = this.$refs.elasticsearch.results;
            const searchText = this.$refs.elasticsearch.searchText;

            this.results = results;

            this.results.push({
                name: searchText,
            });
        },

        handleFocus() {
            this.showResults = true;
        },

        handleBlur() {
            setTimeout(() => {
                this.showResults = false;
            }, 100);
        },

        clearSelectedTopic() {
            this.setPickedTopic(null);
            this.$refs.elasticsearch.setShowOverlay(false);
            this.$refs.elasticsearch.setSearchText('');
        },

        setPickedTopic(pickedTopic) {
            this.pickedTopic = pickedTopic;
            this.$emit('change', {pickedTopic});
        },
    },
};
</script>

<style>
    .search-results {
        position: absolute;
        background-color: #fff;
        left: 0;
        right: 0;
        margin: 0;
        min-height: 400px;
        z-index: 1;
    }

    .no-border {
        border-top: 0;
        border-bottom: 0;
    }

    .topic-picker-input-overlay {
        background-color: #fff;
    }
</style>
