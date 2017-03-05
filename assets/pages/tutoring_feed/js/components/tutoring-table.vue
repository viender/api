<template>
    <table class="table table-hover table-responsive">
        <thead class="thead-inverse">
            <tr>
                <th>Title</th>
                <th>Bids</th>
                <th>Number of week</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tutoring-row v-for="tutoring in tutorings.data" :tutoring="tutoring"></tutoring-row>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: ['tutorings']
    }
</script>