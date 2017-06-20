<template>
    <div>
        <answer-edit-overlay v-if="model.type === 'answer'" :answer="model"></answer-edit-overlay>
    </div>
</template>

<script>
export default {
    props: {
        model: {
            type: Object,
            required: true,
        },
    },
};
</script>
