<template>
    <overlay ref="overlay" z-index="1044">
        <strong slot="title">Add a Credential</strong>
        <div slot="content">
            <select class="generic-select" name="type" id="credentialType" style="display: initial;" v-model="type">
                <option value="" selected="selected" disabled="disabled">Credential Type</option>
                <option value="employment">Employment</option>
                <option value="education">Education</option>
                <option value="location">Location</option>
                <option value="topic">Topic</option>
            </select>

            <employment-credential-form
                :form="form"
                v-show="type === 'employment'"
                @submit-success="handleSubmitSuccess">
            </employment-credential-form>

            <education-credential-form
                :form="form"
                v-show="type === 'education'"
                @submit-success="handleSubmitSuccess">
            </education-credential-form>

            <location-credential-form
                :form="form"
                v-show="type === 'location'"
                @submit-success="handleSubmitSuccess">
            </location-credential-form>

            <topic-credential-form
                :form="form"
                v-show="type === 'topic'"
                @submit-success="handleSubmitSuccess">
            </topic-credential-form>
        </div>
    </overlay>
</template>

<script>
import Vuex from 'vuex';
import * as types from '../store/mutation-types';
import employmentCredentialForm from './forms/employment-credential-form';
import educationCredentialForm from './forms/education-credential-form';
import locationCredentialForm from './forms/location-credential-form';
import topicCredentialForm from './forms/topic-credential-form';

export default {
    components: {
        'employment-credential-form': employmentCredentialForm,
        'education-credential-form': educationCredentialForm,
        'location-credential-form': locationCredentialForm,
        'topic-credential-form': topicCredentialForm,
    },

    computed: Object.assign(Vuex.mapState('credentials', [
        'form',
    ])),

    data() {
        return {
            type: '',
        };
    },

    mounted() {
        this.$parent.$forceUpdate();
    },

    methods: {
        open() {
            this.$refs.overlay.open();
        },

        close() {
            this.$refs.overlay.close();
        },

        setShow(show, e) {
            if (e) e.stopPropagation();
            this.$store.commit(`credentials/${types.SET_SHOW_ADD_CREDENTIAL_OVERLAY}`, {show});
        },

        handleSubmitSuccess({credential}) {
            this.$store.commit(`credentials/${types.UNSHIFT_CREDENTIAL}`, {credential});
            this.$store.commit(`credentials/${types.SET_SELECTED_CREDENTIAL}`, {credential});
            this.setShow(false);
            this.$emit('add', {credential});
        },
    },
};
</script>

<style>
    .generic-select {
        margin-bottom: 20px;
    }
</style>
