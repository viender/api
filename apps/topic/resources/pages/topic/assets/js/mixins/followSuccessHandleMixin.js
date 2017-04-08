export default {
    methods: {
        followSuccessHandle(response) {
            if (response.status === 201) {
                this.$refs.followTopicButton.$el.className += ' followed';
                this.$refs.followTopicButton.$el.innerHTML = 'Unfollow';
            } else if (response.status === 204) {
                this.$refs.followTopicButton.$el.className = this.$refs.followTopicButton.$el.className.replace(' followed', '');
                this.$refs.followTopicButton.$el.innerHTML = 'Follow';
            }
        },
    }
}
