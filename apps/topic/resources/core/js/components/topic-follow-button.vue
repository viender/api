<template>
    <button>
        <span v-show="followed">Unfollow</span>
        <span v-show="! followed">Follow</span>
    </button>
</template>

<script>
export default {
    props: ['url'],
}
</script>
