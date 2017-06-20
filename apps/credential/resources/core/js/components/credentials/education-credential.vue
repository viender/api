<template>
    <span>
        <i class="collection-item-radio-label-icon fa fa-graduation-cap" aria-hidden="true" v-if="showIcon"></i>
        <span class="collection-item-radio-label-content">
            {{ credential.property.degree_type }}
        </span>

        <a :href="$viender.helpers.getUrl('self_html', credential.data.concentration)" style="text-transform: capitalize;" v-if="withLink">
            {{ credential.data.concentration.name }}
        </a>
        <span style="text-transform: capitalize;" v-if="!withLink">
            {{ credential.data.concentration.name }}
        </span>

        <span v-if="credential.data.secondary_concentration.name">
            and
        </span>

        <a :href="$viender.helpers.getUrl('self_html', credential.data.secondary_concentration)" style="text-transform: capitalize;" v-if="withLink">
            {{ credential.data.secondary_concentration.name ?
                `${credential.data.secondary_concentration.name}` : '' }}
        </a>
        <span style="text-transform: capitalize;" v-if="!withLink">
            {{ credential.data.secondary_concentration.name ?
                `and ${credential.data.secondary_concentration.name}` : '' }}
        </span>
        <span>
            {{ credential.property.graduation_year ?
                ` (${credential.property.graduation_year})` : '' }}
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
    },
};
</script>
