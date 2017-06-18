import * as types from '../store/mutation-types';

export default {
    computed: {
        selectedStartYear() {
            return this.form[this.formType].start_year;
        },

        years() {
            const currentYear = (new Date).getFullYear();
            let years = [];
            let year = currentYear;

            while(year >= 1900) {
                years.push(year);
                year -= 1;
            }

            return years;
        },

        endYears() {
            const currentYear = (new Date).getFullYear();
            const startYear = this.selectedStartYear;

            let years = [];
            let year = currentYear;

            if (startYear) {
                while(year >= startYear) {
                    years.push(year);
                    year -= 1;
                }
            }

            return years;
        },
    },

    methods: {
        setFormInput({form, key, value}) {
            this.$store.commit(`credentials/${types.SET_FORM_INPUT}`, {form, key, value});
        },

        submit({form}) {
            this.$store.dispatch('credentials/submitCredential', {credential: form})
            .then((credential) => {
                this.$emit('submit-success', {credential});
            })
            .catch(() => {
                this.$emit('submit-error');
            });
        },
    },
};
