<template>
    <div class="more-menu" @click="togglePopup($event)">
        <a><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
        <div class="card-action-popup-container" :class="showPopup ? 'active' : ''" @click="$event.stopPropagation()">
            <div class="card-action-popup-content">
                <ul class="card-action-popup-list">
                    <li class="card-action-popup-item" v-if="model.owner.id === $viender.user.id" @click="destroy()">
                        <a>Delete</a>
                    </li>
                    <li class="card-action-popup-item" v-if="model.owner.id !== $viender.user.id">
                        <a>Report</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['model'],

    data() {
        return {
            requestingDestroy: false,
            showPopup: false,
        };
    },

    created() {
        const self = this;

        $('body').click(() => {
            self.showPopup = false;
        });
    },

    methods: {
        togglePopup(e) {
            if (window.lastShowedUpPopup) window.lastShowedUpPopup.showPopup = false;
            window.lastShowedUpPopup = this;
            e.stopPropagation();
            this.showPopup = !this.showPopup;
        },

        destroy() {
            const self = this;

            if(self.requestingDestroy) return;

            self.requestingDestroy = true;

            axios.post(self.$viender.helpers.getUrl('self', self.model), {
                _method: 'delete',
            })
                .then(function(response) {
                    self.model.deleted_at = true;
                    if (typeof self.$parent.showComments !== 'undefined') {
                        self.$parent.showComments = false;
                    }
                    self.requestingDestroy = false;
                })
                .catch(function(error) {
                    if(error.response.status == 401) {
                        document.location = url('login');
                    }
                    self.requestingDestroy = false;
            });
        },
    },
};
</script>
