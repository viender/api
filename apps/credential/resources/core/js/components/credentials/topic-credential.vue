<template>
    <span>
        <i class="collection-item-radio-label-icon fa fa-futbol-o" aria-hidden="true" v-if="showIcon"></i>
        <span class="collection-item-radio-label-content">
            <span>
                {{ credential.property.experience }}
            </span>
            <span v-if="showTopic">
                .
            </span>
            <span style="text-transform: capitalize;" v-if="showTopic">
                {{ credential.data.topic.name }}
            </span>
        </span>
    </span>
</template>

<script>
export default {
    props: {
        credential: {
            type: Object,
            required: null,
        },

        showIcon: {
            type: Boolean,
            default: false,
        },

        withLink: {
            type: Boolean,
            default: false,
        },

        showTopic: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
