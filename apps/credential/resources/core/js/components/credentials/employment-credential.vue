<template>
    <span>
        <i class="collection-item-radio-label-icon fa fa-briefcase" aria-hidden="true" v-if="showIcon"></i>
        <span class="collection-item-radio-label-content">
            <span style="text-transform: capitalize;">
                {{ credential.property.position }}
            </span>
            <span>
                at
            </span>
            <a :href="$viender.helpers.getUrl('self_html', credential.data
            .company_or_organization)" style="text-transform: capitalize;" v-if="withLink">
                {{ credential.data.company_or_organization.name }}
            </a>
            <span style="text-transform: capitalize;" v-if="!withLink">
                {{ credential.data.company_or_organization.name }}
            </span>
            <span>
                ({{ credential.property.start_year }} -
                {{ credential.property.end_year ? credential.property.end_year : 'present' }})
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
