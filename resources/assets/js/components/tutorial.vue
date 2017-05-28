<template>
    <div v-if="!tutorialComplete && show" class="tutorial-container">
        <div class="tutorial" :style="currentStory ? currentStory.circleStyle : ''">
            <div class="tutorial-content">
                <p v-html="currentStory.description"></p>

                <p v-if="isLastStory()">
                    <span>Apakah tutorial ini membantu?</span>
                    <a v-if="!answered" style="padding-left: 10px;" @click="answer(1)">Ya</a>
                    <a v-if="!answered" style="padding-left: 10px;" @click="answer(0)">Tidak</a>
                    <span v-if="answered">
                        <span v-if="answered === 'yes'">Terimakasih.</span>
                        <span v-if="answered === 'no'">Terimakasih, kami akan membuat tutorial ini menjadi lebih baik lagi.</span>
                    </span>
                </p>

                <div class="tutorial-content-action">
                    <span @click="previous()" v-if="hasPrevious()">
                        Previous
                    </span>
                    <span @click="next()" v-if="hasNext()">
                        <span v-if="isFirstStory()">Great, let's do it</span>
                        <span v-else>Next</span>
                    </span>
                    <span @click="finish()" v-if="isLastStory()">
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
            answered: null,
            user: {tutorial_complete_at: true},
            stories: [
                {
                    circleStyle: `bottom: ${-500}px;`,
                    description: '<strong>Welcome to Viender</strong><br><br>Let\'s do a short tutorial to let you know basic features of Viender.',
                },
                {
                    circleStyle: `top: ${45}px; left: calc(${$('#read-menu').position().left}px - 14px);`,
                    description: 'Menu Feed, disini kamu bisa melihat semua jawaban dari topic atau orang yang kamu follow. Upvote jawaban yang kamu suka dan downvote jawaban yang tidak kamu suka agar feed kamu menjadi lebih relevan.',
                },
                {
                    circleStyle: `top: ${45}px; left: calc(${$('#answer-menu').position().left}px - 14px);`,
                    description: 'Menu Answer, disini kamu dapat melihat semua pertanyaan dari dari topic atau orang yang kamu follow. Jawab pertanyaan topik keahlianmu.',
                },
                {
                    circleStyle: `top: ${45}px; left: calc(${$('.notification-menu-button').position().left}px + ${$('.notification-menu-button').width() / 2}px - 13px);`,
                    description: 'Menu Notification, semua notifikasi kamu dapat dilihat disini.',
                },
                {
                    circleStyle: `top: ${45}px; left: calc(${$('#profile-menu').position().left}px - 14px);`,
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
            return this.user.tutorial_complete_at;
        },
    },

    created() {
        if (!this.tutorialComplete) {
            $('body').css('overflow', 'hidden');
        }

        this.currentStory = this.stories[0];

        this.$viender.helpers.fetchAuthenticatedUser()
        .then((user) => {
            this.user = user;
        });

        if (window.ga) {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Tutorial',
                eventAction: 'start',
                eventValue: 1,
                eventLabel: 'Welcome Tutorial Start',
            });
        }
    },

    methods: {
        previous() {
            this.currentStory = this.stories[this.stories.indexOf(this.currentStory) - 1];
        },

        next() {
            this.currentStory = this.stories[this.stories.indexOf(this.currentStory) + 1];
        },

        finish() {
            axios.post(window.url('/profile'), {
                _method: 'PUT',
                tutorial_complete_at: (new Date).toGMTString(),
            })
            .then((response) => {
                $('body').css('overflow', 'auto');
                this.show = false;

                if (window.ga) {
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'Tutorial',
                        eventAction: 'finish',
                        eventValue: 1,
                        eventLabel: 'Welcome Tutorial Finish',
                    });
                }
            })
            .catch((e) => {
                console.log(e);
            });
        },

        isFirstStory() {
            return this.stories.indexOf(this.currentStory) === 0;
        },

        hasPrevious() {
            return this.stories.indexOf(this.currentStory) > 0;
        },

        hasNext() {
            return this.stories.indexOf(this.currentStory) < this.stories.length - 1;
        },

        isLastStory() {
            return this.stories.indexOf(this.currentStory) === this.stories.length - 1;
        },

        answer(answer) {
            if (answer) {
                this.answered = 'yes';

                if (window.ga) {
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'Tutorial',
                        eventAction: 'positive_feedback',
                        eventValue: 1,
                        eventLabel: 'Welcome Tutorial Positive Feedback',
                    });
                }
            } else {
                this.answered = 'no';

                if (window.ga) {
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'Tutorial',
                        eventAction: 'negative_feedback',
                        eventValue: 1,
                        eventLabel: 'Welcome Tutorial Negative Feedback',
                    });
                }
            }
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
