import * as types from '../store/mutation-types';

export default {
    methods: {
        updateSearchText(e) {
            this.$store.commit(`searchOrAskOverlay/${types.SET_SEARCH_TEXT}`, e.target.value);
        }
    }
}
