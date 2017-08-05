<template>
    <div class="more-menu" @click="open()" v-if="$viender.user">
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        <sneakpeek ref="sneakpeek">
            <ul class="collection">
                <li class="collection-item" v-if="model.owner.id === $viender.user.id && model.type === 'answer'" @click="clickEdit()">
                    <a>Edit</a>
                </li>
                <li class="collection-item" v-if="model.owner.id === $viender.user.id" @click="deleteModel()">
                    <a>Delete</a>
                </li>
                <li class="collection-item" v-if="model.owner.id !== $viender.user.id">
                    <a>Report</a>
                </li>
            </ul>
        </sneakpeek>
    </div>
</template>

<script>
import moreMenuMixin from '../mixins/moreMenuMixin';

export default {
    mixins: [moreMenuMixin],

    methods: {
        open() {
            if (!this.$refs.sneakpeek.isOpen()) {
                this.$refs.sneakpeek.open();
            }

            this.$emit('open');
        },

        close() {
            this.$refs.sneakpeek.close();
        },

        clickEdit() {
            this.$emit('click-edit', {model: this.model});
        },
    },
};
</script>
