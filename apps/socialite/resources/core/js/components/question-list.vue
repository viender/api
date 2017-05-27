<template>
    <div class="">
        <question :question="question" v-for="question in questions"></question>
        <div class="preloader preloader-wrapper small active" v-show="requesting">
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
        <answer-create-modal></answer-create-modal>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
    props: ['questionUrl'],

    data() {
        return {
            showModal: false,
        };
    },

    computed: {
        requesting() {
            return this.$store.state.questionList.requesting;
        },

        questions() {
            return this.$store.state.questionList.questions;
        },

        page() {
            return this.$store.state.questionList.page - 1;
        },

        totalPages() {
            return this.$store.state.questionList.totalPages;
        },
    },

    created() {
        const self = this;

        $(window).on('scroll', function() {
            if($(window).scrollTop() + $(window).height() >= $(document).height() - 1000) {
                if (self.page <= self.totalPages) {
                    self.fetchData();
                }
            }
        });
    },

    mounted() {
        this.$store.dispatch('questionList/setQuestionUrl', this.questionUrl);
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.$store.dispatch('questionList/fetchData');

            if (window.ga) {
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Questions',
                    eventAction: `page_${this.page}`,
                    eventValue: 1,
                    eventLabel: 'Question List Page Reach',
                });
            }
        },
    },
};
</script>
