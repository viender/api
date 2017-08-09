<template>
    <div ref="sortButton" class="fixed-action-btn click-to-toggle">
        <a class="btn-floating btn-large blue">
            <i class="large material-icons">{{ selectedIcon || 'filter_list' }}</i>
        </a>
        <ul>
            <li>
                <a class="btn-floating red"
                    @click="sort({sortBy: 'latest', icon: 'access_time'})">
                    <i class="material-icons">access_time</i>
                </a>
                <span class="sort-button">Latest</span>
            </li>
            <li>
                <a class="btn-floating blue"
                    @click="sort({sortBy: 'popular', icon: 'thumb_up'})">
                    <i class="material-icons">thumb_up</i>
                </a>
                <span class="sort-button">Popular</span>
            </li>
<!--             <li>
                <a class="btn-floating green"
                    @click="sort({sortBy: 'trending', icon: 'timeline'})">
                    <i class="material-icons">timeline</i>
                </a>
                <span class="sort-button">Trending</span>
            </li> -->
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedIcon: null,
        };
    },
    methods: {
        sort({sortBy, icon}) {
            this.selectedIcon = icon;
            this.$store.dispatch('feed/reset');
            this.$store.commit('feed/SET_SORT_BY', {sortBy});
            this.$store.dispatch('feed/fetchData');
            this.close();
        },
        open() {
            window.$(this.$refs.sortButton).openFAB();
        },
        close() {
            window.$(this.$refs.sortButton).closeFAB();
        },
    },
};
</script>

<style>
    .sort-button {
        background: rgb(255, 255, 255);
        padding: 0 10px;
        border-radius: 10px;
    }
</style>
