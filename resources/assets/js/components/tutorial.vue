<template>
    <div v-if="show && active" class="tutorial-container">
        <div class="tutorial" :style="currentStory ? currentStory.position : ''">
            <div class="tutorial-content">
                <p>{{ currentStory.description }}</p>

                <div class="tutorial-content-action">
                    <a href="#" @click="previous()" v-if="stories.indexOf(currentStory) > 0">Previous</a>
                    <a href="#" @click="next()" v-if="stories.indexOf(currentStory) < stories.length - 1">Next</a>
                    <a href="#" @click="finish()" v-if="stories.indexOf(currentStory) === stories.length - 1">Finish</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            active: true,
            currentStory: null,
            stories: [
                {
                    position: `bottom: ${0}px; left: calc(${$('#read-menu').position().left}px - 14px);`,
                    description: 'Menu Feed, disini kamu bisa melihat semua jawaban dari topic atau orang yang kamu follow. Upvote jawaban yang kamu suka dan downvote jawaban yang tidak kamu suka agar feed kamu menjadi lebih relevan.',
                },
                {
                    position: `bottom: ${0}px; left: calc(${$('#answer-menu').position().left}px - 14px);`,
                    description: 'Menu Answer, disini kamu dapat melihat semua pertanyaan dari dari topic atau orang yang kamu follow. Jawab pertanyaan topik keahlianmu.',
                },
                {
                    position: `bottom: ${0}px; left: calc(${$('#profile-menu').position().left}px - 14px);`,
                    description: 'Menu Profile, semua jawaban, pertanyaan, follower, dan following kamu bisa dilihat disini.',
                },
                {
                    position: `top: ${1}px; left: calc(${$('#ask-menu').position().left}px - 10px);`,
                    description: 'Search Button, cari pertanyaanmu atau buat pertanyaan baru disini.',
                },
            ],
        };
    },

    computed: {
        show() {
            return ! parseInt(localStorage.getItem('viender.tutorial.complete'));
        },
    },

    created() {
        if (this.show) {
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
            this.active = false;
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

    .tutorial-content-action a {
        padding-left: 10px;
    }
</style>
