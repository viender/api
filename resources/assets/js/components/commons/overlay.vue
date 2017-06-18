<template>
    <div class="overlay" :style="`z-index: ${zIndex || 1};`" @click="$event.stopPropagation()">
        <div class="container overlay-container">
            <div class="row overlay-header">
                <div class="col s12">
                    <div class="back-button" @click="backButtonHandle()">
                        <i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
                    </div>
                    <div class="overlay-title">
                        <slot name="title"></slot>
                    </div>
                    <slot name="header"></slot>
                </div>
            </div>
            <div class="row" style="margin-top: 62px;">
                <slot name="content"></slot>
            </div>
            <div class="row">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['zIndex'],

    methods: {
        backButtonHandle() {
            this.$emit('back');
        },
    },
};
</script>

<style>
    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        overflow-y: auto;
    }

    .overlay-container {
        margin: 0;
        width: 100%;
    }

    .overlay-title {
        font-size: 1.25rem;
        top: -2px;
        position: relative;
        margin-left: 10px;
        display: inline-block;;
    }
</style>
