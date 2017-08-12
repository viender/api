<template>
	<form ref="form" :action="action" method="POST" @submit="submit($event)">
        <input type="hidden" name="_token" :value="csrfToken">

		<div :class="'form-group' + (errors.title ? ' has-error' : '')">
			<label for="title">Title</label>
			<input type="text" class="form-control" id="title" name="title" placeholder="Title" v-model="formData.title">

			<span class="help-block" v-if="errors.title" v-for="error in errors.title">
	            <strong>{{ error }}</strong>
	        </span>
		</div>

		<div :class="'form-group' + (errors.price ? ' has-error' : '')">
			<label for="price">Budget</label>
			<input type="number" min="0" class="form-control" id="price" name="price" placeholder="Budget" v-model="formData.price">

			<span class="help-block" v-if="errors.price" v-for="error in errors.price">
	            <strong>{{ error }}</strong>
	        </span>
		</div>

		<div :class="'form-group' + (errors.number_of_week ? ' has-error' : '')">
			<label for="number_of_week">Number of week</label>
			<input type="number" min="0" class="form-control" id="number_of_week" name="number_of_week" placeholder="Number of week" v-model="formData.number_of_week">

			<span class="help-block" v-if="errors.number_of_week" v-for="error in errors.number_of_week">
	            <strong>{{ error }}</strong>
	        </span>
		</div>

		<div :class="'form-group' + (errors.body ? ' has-error' : '')">
			<label for="body">Description</label>
			<textarea class="form-control" rows="10" id="body" name="body" placeholder="Description"  v-model="formData.body"></textarea>

			<span class="help-block" v-if="errors.body" v-for="error in errors.body">
	            <strong>{{ error.replace('body', 'description') }}</strong>
	        </span>
		</div>

	    <div class="form-group">
	    	<label>Schedule</label>
		    <div class="form-group row" v-for="day in days">

		    	<label class="col-md-2 col-form-label" :for="day"><input type="checkbox" :id="day" :name="day">{{ day }}</label>
		    	<input type="hidden" :name="'schedules[{{' + days.indexOf(day) + '}}][day]'" :value="day">
				<div class="form-group col-md-10 row">
					<div class="col-md-6">
						<label :for="day + '_from'">From</label>
						<input type="time" class="form-control" :id="day + '_from'" :name="'schedules[{{' + days.indexOf(day) + '}}][from]'" v-model="formData.schedules[days.indexOf(day)].from">
					</div>
					<div class="col-md-6">
						<label :for="day + '_to'">To</label>
						<input type="time" class="form-control" :id="day + '_to'" :name="'schedules[{{' + days.indexOf(day) + '}}][to]'" v-model="formData.schedules[days.indexOf(day)].to">
					</div>
				</div>
		    </div>
	    </div>
		<input class="btn btn-default pull-right" ref="submit-button" type="submit" value="Submit">
	</form>
</template>

<script>
export default {
	props: ['action'],

    data() {
    	return {
            csrfToken: window.Laravel ? window.Laravel.csrfToken : '',

    		days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],

            formData: {
                title: null,
                price: null,
                number_of_week: null,
                body: null,
                schedules: [
                    {
                        day: 'monday',
                        from: '',
                        to: ''
                    },
                    {
                        day: 'tuesday',
                        from: '',
                        to: ''
                    },
                    {
                        day: 'wednesday',
                        from: '',
                        to: ''
                    },
                    {
                        day: 'thursday',
                        from: '',
                        to: ''
                    },
                    {
                        day: 'friday',
                        from: '',
                        to: ''
                    },
                    {
                        day: 'saturday',
                        from: '',
                        to: ''
                    },
                    {
                        day: 'sunday',
                        from: '',
                        to: ''
                    },
                ]
            },

            errors: {},

            loading: false
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
                    var tutoring = response.data;
                    document.location = tutoring.links.filter(function(link) { return link.rel == 'self_html' })[0].url;
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
