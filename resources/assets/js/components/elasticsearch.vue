<template>
    <div class="elasticsearch">
        <div class="elasticsearch-search-bar">
            <input @focus="$emit('focus')" @blur="$emit('blur')" type="text" v-model="searchText" @input="handleInput()" :placeholder="placeholder">
            <div class="elasticsearch-search-bar-overlay" v-show="showOverlay">
                <slot name="input-overlay"></slot>
            </div>
        </div>
        <slot name="search-results"></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        params: {
            type: Object,
            default: () => {
                return {};
            },
        },
        placeholder: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            searchText: '',
            results: [],
            typingTimer: null,
            doneTypingInterval: 400,
            url: api('search'),
            requesting: false,
            showOverlay: false,
        };
    },

    mounted() {
        this.$emit('mounted');
    },

    methods: {
        handleInput() {
            const searchText = this.searchText;
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(() => {
                this.search();
                this.$emit('done-typing', {searchText});
            }, this.doneTypingInterval);
        },

        search(params = {}) {
            const self = this;

            if (self.requesting) return;

            if (self.searchText == '') {
                self.results = [];
                return;
            }

            self.requesting = true;

            axios.get(self.url, {
                params: Object.assign(self.params, params, {
                    q: self.searchText,
                }),
            })
            .then((response) => {
                const results = response.data.data;
                self.results = results;

                if (results.length === 0) {
                    self.$emit('fetch-not-found', {response});
                }

                self.$emit('fetch-success', {response});
                self.requesting = false;
            })
            .catch((error) => {
                self.requesting = false;
                self.$emit('fetch-error', {error});
                console.log(error);
            });
        },

        reset() {
            this.searchText = '';
            this.results = [];
        },

        setShowOverlay(showOverlay) {
            this.showOverlay = showOverlay;
        },

        setSearchText(searchText) {
            this.searchText = searchText;
        },
    },
};
</script>

<style>
    .elasticsearch {
        position: relative;
    }

    .elasticsearch-search-bar {

    }

    .elasticsearch-search-bar-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>
