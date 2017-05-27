<template>
    <div class="more-menu" @click="togglePopup($event)">
        <a><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
        <div class="card-action-popup-container" :class="showPopup ? 'active' : ''" @click="$event.stopPropagation()">
            <div class="card-action-popup-content">
                <ul class="card-action-popup-list">
                    <li class="card-action-popup-item" v-if="model.owner.id === $viender.user.id" @click="deleteModel()">
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
            this.showPopup = !this.showPopup;

            if (window.lastShowedUpPopup && window.lastShowedUpPopup !== this)
                window.lastShowedUpPopup.showPopup = false;

            if (this.showPopup)
                window.lastShowedUpPopup = this;

            e.stopPropagation();
        },

        deleteModel() {
            const self = this;

            self.model.delete()
            .then(() => {
                if (typeof self.$parent.showComments !== 'undefined') {
                    self.$parent.showComments = false;
                }
            });
        },
    },
};
</script>
