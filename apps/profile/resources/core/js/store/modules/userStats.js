import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
        followerCount: 0,
        followingCount: 0,
        topicCount: 0,
    },

    mutations: { 
        [types.SET_FOLLOWER_COUNT] (state, followerCount) {
            state.followerCount = followerCount;
        },

        [types.INCREMENT_FOLLOWER_COUNT] (state) {
            state.followerCount++;
        },

        [types.DECREMENT_FOLLOWER_COUNT] (state) {
            state.followerCount--;
        },

        [types.SET_FOLLOWING_COUNT] (state, followingCount) {
            state.followingCount = followingCount;
        },

        [types.INCREMENT_FOLLOWING_COUNT] (state) {
            state.followingCount++;
        },

        [types.DECREMENT_FOLLOWING_COUNT] (state) {
            state.followingCount--;
        },

        [types.SET_TOPIC_COUNT] (state, topicCount) {
            state.topicCount = topicCount;
        },

        [types.INCREMENT_TOPIC_COUNT] (state) {
            state.topicCount++;
        },

        [types.DECREMENT_TOPIC_COUNT] (state) {
            state.topicCount--;
        },
    },

    actions: {

    }
}
