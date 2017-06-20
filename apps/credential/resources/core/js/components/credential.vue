<template>
    <span>
        <employment-credential
            :credential="credential"
            :show-icon="showIcon"
            :with-link="withLink"
            v-if="credential.type === 'employment'">
        </employment-credential>

        <education-credential
            :credential="credential"
            :show-icon="showIcon"
            :with-link="withLink"
            v-if="credential.type === 'education'">
        </education-credential>

        <location-credential
            :credential="credential"
            :show-icon="showIcon"
            :with-link="withLink"
            v-if="credential.type === 'location'">
        </location-credential>

        <topic-credential
            :credential="credential"
            :show-icon="showIcon"
            :with-link="withLink"
            v-if="credential.type === 'topic'">
        </topic-credential>
    </span>
</template>

<script>
import employmentCredential from './credentials/employment-credential';
import educationCredential from './credentials/education-credential';
import locationCredential from './credentials/location-credential';
import topicCredential from './credentials/topic-credential';

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

    components: {
        'employment-credential': employmentCredential,
        'education-credential': educationCredential,
        'location-credential': locationCredential,
        'topic-credential': topicCredential,
    },
};
</script>
