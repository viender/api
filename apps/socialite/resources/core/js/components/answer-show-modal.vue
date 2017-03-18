<template>
	<div ref="modal" class="answer-show-modal-overlay" @click="hideAnswerCreateModal()" v-show="showAnswerModal">
		<div class="answer-show-modal" @click="modalClickHandle($event)">
			<answer :answer="answer" v-if="answer ? answer.body : false"></answer>
			<div class="preloader-wrapper small active" style="margin: 120px auto; display: block;" v-else>
				<div class="spinner-layer spinner-blue-only">
					<div class="circle-clipper left">
						<div class="circle"></div>
					</div>
					<div class="gap-patch">
						<div class="circle"></div>
					</div>
					<div class="circle-clipper right">
						<div class="circle"></div>
					</div>
				</div>
			</div>
		</div>
        <div class="modal-action">
            <span>X</span>
        </div>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
    props: ['answer'],

    mixins: [require('viender_core/js/mixins/urlHelper')],

    computed: {
    	answer() {
    		return this.$store.state.feed.showedAnswer;
    	},

    	showAnswerModal() {
    		return this.$store.state.feed.showAnswerModal;
    	}
    },

    methods: {
        modalClickHandle(event) {
            event.stopPropagation();
        },

        hideAnswerCreateModal() {
        	$(this.$refs.modal).scrollTop(0);
            this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, false);
        }
    }
}
</script>