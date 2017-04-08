<template>
    <button role="button" @click="sendRequest()">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        action: {
            type: String,
            default: 'get'
        },
        params: {
            type: Object,
            default: function () {
                return {};
            }
        },
        data: {
            type: Object,
            default: function () {
                return {};
            }
        },
    },

    data() {
        return {
            requesting: false,
        }
    },

    methods: {
        sendRequest() {
            if (this.action.toLowerCase() == 'get') {
                this.sendGetRequest();
            } else {
                this.sendPostRequest();
            }
        },

        sendGetRequest() {
            const self = this;

            if (self.requesting) return;

            self.requesting = true;

            axios.get(self.url, {
                params: self.params,
            })
            .then(function (response) {
                self.$emit('success', response);
                self.requesting = false;
            })
            .catch(function (error) {
                self.$emit('error', error);
                self.requesting = false;
            });
        },

        sendPostRequest() {
            const self = this;

            if (self.requesting) return;

            self.requesting = true;

            axios.post(self.url, Object.assign({
                params: self.params,
            }, self.data))
            .then(function (response) {
                self.$emit('success', response);
                self.requesting = false;
            })
            .catch(function (error) {
                self.$emit('error', error);
                self.requesting = false;
            });
        },
    }
}
</script>
