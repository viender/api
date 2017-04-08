import * as types from '../store/mutation-types';

export default {
    methods: {
        updateQuestionDetail(e) {
            this.$store.commit(`searchOrAskOverlay/${types.SET_QUESTION_DETAIL}`, e.target.value);
        }
    }
}
