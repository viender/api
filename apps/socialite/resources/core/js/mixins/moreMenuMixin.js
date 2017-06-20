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

        editModel() {

        },
    },
};
