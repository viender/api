<template>
    <div>
        <ul class="collection">
            <li class="collection-item" v-if="object.type == 'answer'" v-for="object in searchResults">
                <a :href="$viender.helpers.getUrl('self_html', object)">{{ object.preview }}</a>
            </li>
            <li class="collection-item" v-if="object.type == 'question'" v-for="object in searchResults">
                <a :href="$viender.helpers.getUrl('self_html', object)">{{ object.title }}</a>
            </li>
            <li class="collection-item" v-if="object.type == 'topic'" v-for="object in searchResults">
                <a :href="$viender.helpers.getUrl('self_html', object)">{{ object.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: Object.assign(Vuex.mapState('raa', [
        'show',
        'searchResults',
    ])),
}
</script>
