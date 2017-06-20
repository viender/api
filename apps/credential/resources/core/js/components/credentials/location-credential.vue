<template>
    <span>
        <i class="collection-item-radio-label-icon fa fa-map-marker" aria-hidden="true" v-if="showIcon"></i>
        <span class="collection-item-radio-label-content">
            <span>Lives in</span>
            <a :href="$viender.helpers.getUrl('self_html', credential.data.location)" style="text-transform: capitalize;" v-if="withLink">
                {{ credential.data.location.name }}
            </a>
            <span style="text-transform: capitalize;" v-if="!withLink">
                {{ credential.data.location.name }}
            </span>
            <span>
                <span>
                ({{ credential.property.start_year }} -
                {{ (credential.property.still_here || !credential.property.end_year) ?
                    'present' : ( credential.property.end_year) ?
                    credential.property.end_year : '' }})
                </span>
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
    },
};
</script>
