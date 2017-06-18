<template>
    <form>
        <topic-picker
            name="school"
            ref="locationPicker"
            placeholder="Location"
            :category-id="3"
            @change="setFormInput({
                form: 'location',
                key: 'location',
                value: $event.pickedTopic ? ($event.pickedTopic.id || $event.pickedTopic.name) : null})">
        </topic-picker>
        <select
            v-model="form.location.start_year"
            class="generic-select"
            name="start_year"
            id="location_start_year"
            style="display: initial;">
            <option disabled="disabled" :value="null">Start Year</option>
            <option v-for="year in years" :value="year">{{ year }}</option>
        </select>
        <select
            v-model="form.location.end_year"
            class="generic-select"
            name="end_year"
            id="location_end_year"
            style="display: initial;">
            <option disabled="disabled" :value="null">End Year</option>
            <option v-for="year in endYears" :value="year">{{ year }}</option>
        </select>
        <div>
            <input v-model="form.location.still_here" type="checkbox" name="still_here" id="locationStillHere" placeholder="Still Here">
            <label for="locationStillHere">I currently live here</label>
        </div>
        <div>
            <input class="btn" type="submit" value="Submit" @click.prevent="submit({form: form.location})">
        </div>
    </form>
</template>

<script>
import addCredentialFormMixin from '../../mixins/add-credential-form';

export default {
    mixins: [addCredentialFormMixin],

    props: {
        form: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            formType: this.form.location.type,
        };
    },
};
</script>
