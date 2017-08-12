<template>
    <form ref="form" :action="action" method="POST" @submit="submit($event)">
        <input type="hidden" name="_token" :value="csrfToken">

        <div :class="'form-group' + (errors.offered_price ? ' has-error' : '')">
            <label for="offered_price">Offered price</label>
            <input type="number" min="0" max="1000000000" class="form-control" id="offered_price" name="offered_price" placeholder="Offered price" v-model="formData.offered_price">

            <span class="help-block" v-if="errors.offered_price" v-for="error in errors.offered_price">
                <strong>{{ error }}</strong>
            </span>
        </div>

        <div :class="'form-group' + (errors.proposal ? ' has-error' : '')">
            <label for="proposal">Proposal</label>
            <textarea class="form-control" rows="10" id="proposal" name="proposal" placeholder="Proposal"  v-model="formData.proposal"></textarea>

            <span class="help-block" v-if="errors.proposal" v-for="error in errors.proposal">
                <strong>{{ error }}</strong>
            </span>
        </div>
        <input class="btn btn-default" ref="submit-button" type="submit" value="Submit">
    </form>
</template>

<script>
export default {
	props: ['action', 'tutoringUrl'],

    data() {
    	return {
            csrfToken: window.Laravel ? window.Laravel.csrfToken : '',

            formData: {
                offered_price: null,
                proposal: null,
            },

            errors: {},

            loading: false,
    	}
    },

    mounted() {

    },

    methods: {
    	submit(event) {
            if (event) event.preventDefault();

            if (this.loading) return;

            this.loading = true;

            axios.post(this.action, this.formData)
                .then(response => {
                    document.location = this.tutoringUrl;
                })
                .catch (error => {
                    if(error.response.status == 422) {
                        this.errors = error.response.data;
                    }
                    this.loading = false;
                });
    	}
    }
}
</script>
