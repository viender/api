<template>
    <div class="more-menu" @click="togglePopup($event)">
        <a><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
        <div class="card-action-popup-container" :class="showPopup ? 'active' : ''" @click="$event.stopPropagation()">
            <div class="card-action-popup-content">
                <ul class="card-action-popup-list">
                    <li class="card-action-popup-item" v-if="model.owner.id === authUserId" @click="deleteModel()">
                        <a>Delete</a>
                    </li>
                    <li class="card-action-popup-item" v-if="model.owner.id !== authUserId">
                        <a>Report</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import moreMenuMixin from '../mixins/moreMenuMixin';

export default {
    mixins: [moreMenuMixin],
};
</script>
