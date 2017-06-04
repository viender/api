<template>
    <div class="add-credential-modal" v-show="visible" @click="hide($event)">
        <div class="add-credential-modal-content" @click="$event.stopPropagation();">
            <input type="text" :value="credentialInput" @input="updateCredentialInput($event.target.value)">
        </div>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import Vuex from 'vuex';

export default {
    computed: Object.assign(Vuex.mapState('credentialAddModal', [
        'credentials',
        'credentialInput',
        'visible',
    ])),

    methods: {
        show() {
            this.visible = true;
        },

        hide(e) {
            e.stopPropagation();
            this.$store.commit(`credentialAddModal/${types.SET_VISIBLE}`, {visible: false});
        },

        updateCredentialInput(credentialInput) {
            this.$store.commit(`credentialAddModal/${types.SET_CREDENTIAL_INPUT}`, {credentialInput});
        },
    },
};
</script>

<style>
    .add-credential-modal {
        position: fixed;
        left:0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 1043;
    }

    .add-credential-modal-content {
        background-color: #fff;
        width: 80%;
        margin: auto;
        height: 200px;
        margin-top: 50%;
    }
</style>
