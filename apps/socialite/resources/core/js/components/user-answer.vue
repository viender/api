<template>
    <div class="more-user-answers">
        {{ answer.id }}
    </div>
</template>

<script>
export default {
    props: {
        answer: {
            type: Object,
            required: null,
        },
    },
};
</script>
