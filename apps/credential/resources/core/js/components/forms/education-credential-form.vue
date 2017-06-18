<template>
    <form>
        <topic-picker
            name="school"
            ref="schoolPicker"
            placeholder="School"
            :category-id="3"
            @change="setFormInput({
                form: 'education',
                key: 'school',
                value: $event.pickedTopic ? ($event.pickedTopic.id || $event.pickedTopic.name) : null})">
        </topic-picker>
        <topic-picker
            name="concentration"
            ref="concentrationPicker"
            placeholder="Concentration"
            :category-id="4"
            @change="setFormInput({
                form: 'education',
                key: 'concentration',
                value: $event.pickedTopic ? ($event.pickedTopic.id || $event.pickedTopic.name) : null})">
        </topic-picker>
        <topic-picker
            name="secondary_concentration"
            ref="secondaryConcentration"
            placeholder="Secondary Concentration"
            :category-id="4"
            @change="setFormInput({
                form: 'education',
                key: 'secondary_concentration',
                value: $event.pickedTopic ? ($event.pickedTopic.id || $event.pickedTopic.name) : null})">
        </topic-picker>
        <input type="text" name="degree_type" placeholder="Degree Type" v-model="form.education.degree_type">
        <select
            v-model="form.education.graduation_year"
            class="generic-select"
            name="graduation_year"
            id="graduation_year"
            style="display: initial;">
            <option selected="selected" disabled="disabled" :value="null">Graduation Year</option>
            <option v-for="year in years" :value="year">{{ year }}</option>
        </select>
        <div>
            <input class="btn" type="submit" value="Submit" @click.prevent="submit({form: form.education})">
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
            formType: this.form.education.type,
        };
    },
};
</script>
