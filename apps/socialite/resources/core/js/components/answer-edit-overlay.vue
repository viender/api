<template>
    <overlay ref="overlay">
        <strong slot="title">Edit Answer</strong>
        <div slot="content">
            {{ answer }}
        </div>
    </overlay>
</template>

<script>
export default {
    props: {
        answer: {
            type: Object,
            required: true,
        },
    },

    methods: {
        open() {
            this.$refs.overlay.open();
        },

        close() {
            this.$refs.overlay.close();
        },
    },
};
</script>
