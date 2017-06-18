<template>
    <form>
        <input type="text" name="position" placeholder="Position" v-model="form.employment.position">
        <topic-picker
            name="company_or_organization"
            ref="employmentPicker"
            placeholder="Company or Organization"
            :category-id="2"
            @change="setFormInput({
                form: 'employment',
                key: 'company_or_organization',
                value: $event.pickedTopic ? ($event.pickedTopic.id || $event.pickedTopic.name) : null})">
        </topic-picker>
        <select
            v-model="form.employment.start_year"
            class="generic-select"
            name="start_year"
            id="startYear"
            style="display: initial;">
            <option disabled="disabled" :value="null">Start Year</option>
            <option v-for="year in years" :value="year">{{ year }}</option>
        </select>
        <select
            v-model="form.employment.end_year"
            class="generic-select"
            name="end_year"
            id="endYear"
            style="display: initial;">
            <option value="" disabled="disabled" :value="null">End Year</option>
            <option v-for="year in endYears" :value="year">{{ year }}</option>
        </select>
        <input v-model="form.employment.still_here" type="checkbox" name="still_here" id="stillHere" placeholder="Still Here">
        <label for="stillHere">Still Here</label>
        <div>
            <input class="btn" type="submit" value="Submit" @click.prevent="submit({form: form.employment})">
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
            formType: this.form.employment.type,
        };
    },
};
</script>
