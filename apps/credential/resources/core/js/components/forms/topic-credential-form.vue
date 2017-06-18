<template>
    <form>
        <topic-picker
            name="topic"
            ref="topicPicker"
            placeholder="Topic"
            :category-id="null"
            @change="setFormInput({
                form: 'topic',
                key: 'topic',
                value: $event.pickedTopic ? ($event.pickedTopic.id || $event.pickedTopic.name) : null})">
        </topic-picker>
        <input type="text" name="experience" placeholder="Position" v-model="form.topic.experience">
        <div>
            <input class="btn" type="submit" value="Submit" @click.prevent="submit({form: form.topic})">
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
            formType: this.form.topic.type,
        };
    },
};
</script>
