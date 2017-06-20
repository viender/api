<template>
    <transition name="fade">
        <div class="sneakpeek" v-show="show">
            <div class="sneakpeek-container" @click="close($event)">
                <div class="sneakpeek-content" :class="classes" @click="$event.stopPropagation()">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            showContent: false,
        };
    },

    computed: {
        classes() {
            return {
                active: this.showContent,
            };
        },
    },

    methods: {
        setShow(show) {
            if(!show) {
                this.showContent = false;
                setTimeout((show) => {
                    this.show = show;
                }, 100);
                $('body').css('overflow-y', 'auto');
            } else {
                this.showContent = true;
                this.show = show;
                $('body').css('overflow', 'hidden');
            }
        },

        open(e) {
            this.setShow(true);
        },

        close(e) {
            this.setShow(false);
        },
    },
};
</script>

<style>
    .sneakpeek {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(0,0,0,0.8);
    }

    .sneakpeek-container {
        position: relative;
        height: 100%;
    }

    .sneakpeek-content {
        position: absolute;
        border-radius: 10px 10px 0 0;
        background-color: #fff;
        transform: translateY(100%);
        transition: all .3s;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .sneakpeek-content.active {
        transform: translateY(0);
    }

    .sneakpeek-content .collection {
        border: 0;
        margin-bottom: 0;
        border-radius: 10px 10px 0 0;
    }

    .sneakpeek-content .collection-item {
        text-align: center;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0;
    }
</style>
