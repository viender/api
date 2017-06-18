<template>
    <div class="edit-credential-modal" v-show="visible" @click="hide($event)">
        <div class="edit-credential-modal-content" @click="$event.stopPropagation();">
            <i @click="hide($event)" class="edit-credential-modal-close-button fa fa-times" aria-hidden="true"></i>
            <div style="padding: 10px;">
                <strong>Choose Credential</strong>
                <p>Let people know your experience with this question.</p>
            </div>
            <div style="position: relative; padding: 10px; padding-top: 0;">
                <img style="position: absolute; border-radius: 50%; width: 42px; height: 42px;" :src="$viender.user ? $viender.helpers.getUrl('avatar', $viender.user) : ''" alt="">
                <div style="padding-left: 58px; min-height: 68px;">
                    <span>{{ $viender.user ? $viender.user.name : '' }}{{ selectedCredentialText ? ', ' + selectedCredentialText : '' }}</span>
                </div>
            </div>
            <ul class="credential-list-action collection">
                <li class="credential-list-action collection-item">
                    <div class="credential-list-action-container" @click="showAddCredential()">
                        <i class="collection-item-radio-label-icon fa fa-plus" aria-hidden="true"></i>
                        <span class="collection-item-radio-label-content">Add a credential</span>
                    </div>
                </li>
            </ul>
            <form action="#" style="position: relative; height: calc(100% - 224px);">
                <ul ref="credentialList" class="credential-list collection">
                    <li class="collection-item" v-for="credential in credentials">
                        <div>
                            <input class="with-gap" @change="selectCredential(credential)" name="credentials" type="radio" :id="`credential-${credential.id}`" :value="credential" v-model="selectedCredential"/>
                            <label class="collection-item-radio-label" :for="`credential-${credential.id}`" v-html="$viender.helpers.credentialHtml(credential)"></label>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import Vuex from 'vuex';
import * as credentialTypes from 'viender_credential/core/js/store/mutation-types';

export default {
    computed: Object.assign(Vuex.mapState('credentials', [
        'credentials',
        'credentialInput',
        'visible',
        'selectedCredential',
    ]), Vuex.mapGetters('credentials', [
        'selectedCredentialText',
    ])),

    created() {
        const self = this;

        self.$viender.helpers.fetchAuthenticatedUser()
        .then((user) => {
            const url = self.$viender.helpers.getUrl('credentials', user);
            self.$store.commit(`credentials/${credentialTypes.SET_CREDENTIALS_URL}`, {url});
            self.$store.dispatch('credentials/fetchCredentials');
        });

        $('credential-list').click(() => {
            const el = $('credential-list');
            const atBottom = el[0].scrollHeight - el.scrollTop() === el.height();
            console.log(atBottom);
            if (atBottom) {
                self.$store.dispatch('credentials/fetchCredentials');
            }
        });
    },

    methods: {
        show() {
            this.visible = true;
        },

        hide(e) {
            e.stopPropagation();
            this.$store.commit(`credentials/${types.SET_VISIBLE}`, {visible: false});
        },

        updateCredentialInput(credentialInput) {
            this.$store.commit(`credentials/${types.SET_CREDENTIAL_INPUT}`, {credentialInput});
        },

        selectCredential(credential) {
            this.$store.commit(`credentials/${types.SET_SELECTED_CREDENTIAL}`, {credential});
        },

        showAddCredential() {
            this.$store.commit(`credentials/${types.SET_SHOW_ADD_CREDENTIAL_OVERLAY}`, {show: true});
        },
    },
};
</script>

<style>
    .edit-credential-modal {
        position: fixed;
        left:0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 1043;
        max-width: 800px;
    }

    .credential-list {
        overflow-y: auto;
        margin-top: 0;
        border-top: 0;
        position: absolute;
        height: 100%;
        left: 0;
        right: 0;
    }

    .credential-list-action {
        margin: 0;
    }

    .credential-list-action-container {
        padding: 0 34px;
        position: relative;
        color: #1da1f2;
    }

    .edit-credential-modal-content {
        position: relative;
        background-color: #fff;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        margin: 20px;
        border-radius: 5px;
    }

    .edit-credential-modal-close-button {
        position: absolute;
        padding: 5px;
        top: 0;
        right: 0;
    }

    .collection-item-radio-label {
        width: 100%;
        position: relative;
        padding: 0 24px;
    }

    .collection-item-radio-label-icon {
        position: absolute;
        left: 0;
        top: 4px;
    }

    .collection-item-radio-label-content {
        position: inherit;
    }

    .edit-credential-modal [type="radio"] + label:before, [type="radio"] + label:after {
        left: initial;
        right: 0;
    }

    .edit-credential-modal [type="radio"]:checked + label:after, [type="radio"].with-gap:checked + label:before, [type="radio"].with-gap:checked + label:after {
        left: initial;
        right: 0;
    }

</style>
