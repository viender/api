<template>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
    props: [],

    computed: {

    },

    mounted() {
        this.$emit('mounted');
        this.$store.commit('userStats/' + types.SET_FOLLOWER_COUNT, this.followerCount);
    },
};
</script>
