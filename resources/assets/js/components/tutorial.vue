<template>
    <div v-if="!tutorialComplete && show" class="tutorial-container">
        <div class="tutorial" :style="currentStory ? currentStory.circleStyle : ''">
            <div class="tutorial-content">
                <p v-html="currentStory.description"></p>

                <div class="tutorial-content-action">
                    <span @click="previous()" v-if="stories.indexOf(currentStory) > 0">
                        Previous
                    </span>
                    <span @click="next()" v-if="stories.indexOf(currentStory) < stories.length - 1">
                        <span v-if="stories.indexOf(currentStory) === 0">Great, let's do it</span>
                        <span v-else>Next</span>
                    </span>
                    <span @click="finish()" v-if="stories.indexOf(currentStory) === stories.length - 1">
                        Finish
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            show: true,
            currentStory: null,
            stories: [
                {
                    circleStyle: `bottom: ${-500}px;`,
                    description: '<strong>Welcome to Viender</strong><br><br>Let\'s do a short tutorial to let you know basic features of Viender.',
                },
                {
                    circleStyle: `bottom: ${0}px; left: calc(${$('#read-menu').position().left}px - 14px);`,
                    description: 'Menu Feed, disini kamu bisa melihat semua jawaban dari topic atau orang yang kamu follow. Upvote jawaban yang kamu suka dan downvote jawaban yang tidak kamu suka agar feed kamu menjadi lebih relevan.',
                },
                {
                    circleStyle: `bottom: ${0}px; left: calc(${$('#answer-menu').position().left}px - 14px);`,
                    description: 'Menu Answer, disini kamu dapat melihat semua pertanyaan dari dari topic atau orang yang kamu follow. Jawab pertanyaan topik keahlianmu.',
                },
                {
                    circleStyle: `bottom: ${0}px; left: calc(${$('#profile-menu').position().left}px - 14px);`,
                    description: 'Menu Profile, semua jawaban, pertanyaan, follower, dan following kamu bisa dilihat disini.',
                },
                {
                    circleStyle: `top: ${1}px; left: calc(${$('#ask-menu').position().left}px - 10px);`,
                    description: 'Search Button, cari pertanyaanmu atau buat pertanyaan baru disini. Kamu juga bisa mencari topik - topik yang ada di Viender disini.',
                },
                {
                    circleStyle: `bottom: ${-500}px;`,
                    description: '<strong>That\'s a wrap</strong><br><br>Sekarang kamu telah tahu fitur dasar Viender, ayo tuliskan pertanyaan atau mulai membaca sekarang.',
                },
            ],
        };
    },

    computed: {
        tutorialComplete() {
            return parseInt(localStorage.getItem('viender.tutorial.complete'));
        },
    },

    created() {
        if (!this.tutorialComplete) {
            $('body').css('overflow', 'hidden');
        }

        this.currentStory = this.stories[0];
    },

    methods: {
        previous() {
            this.currentStory = this.stories[this.stories.indexOf(this.currentStory) - 1];
        },

        next() {
            this.currentStory = this.stories[this.stories.indexOf(this.currentStory) + 1];
        },

        finish() {
            localStorage.setItem('viender.tutorial.complete', 1);
            $('body').css('overflow', 'auto');
            this.show = false;
        },
    },
};
</script>

<style>
    .tutorial-container {
        position: fixed;
        z-index: 999;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .tutorial {
        position: absolute;
        width: 50px;
        height: 50px;
        box-shadow: 0 0 0 99999px rgba(0, 0, 0, .8);
        z-index: 999;
        border-radius: 50%;
    }

    .tutorial-content {
        position: fixed;
        background-color: #fff;
        width: 90%;
        height: calc(30% + 30px);
        margin: 40% auto;
        padding: 10px;
        border-radius: 5px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .tutorial-content-action {
        position: absolute;
        text-align: right;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
    }

    .tutorial-content-action span {
        padding-left: 10px;
        cursor: pointer;
        color: #039be5;
    }
</style>
