<template>
    <form method="POST" :action="commentableCommentsUrl" class="commentCreateForm">
        <div class="input-field">
            <textarea name="body" id="body" class="materialize-textarea" cols="30" rows="1" v-model="formData.body"></textarea>
            <label for="body">Comment</label>
            <button class="btn waves-effect waves-light commentCreateForm-submitButton" type="submit" name="action" @click="postComment($event)">
                Comment
            </button>
        </div>
        <!-- <input type="text" name="body" v-model="formData.body" class="commentCreateForm-textField"> -->
    </form>
</template>

<script>
export default {
    props: ['commentableCommentsUrl'],

    data() {
        return {
            requesting: false,
            formData: {
                body: null,
            },
        };
    },

    methods: {
        postComment(event) {
            const self = this;

            if(event) event.preventDefault();

            if(self.requesting) return;

            if( ! self.formData.body) return;

            self.requesting = true;

            axios.post(this.commentableCommentsUrl + '?with=owner', this.formData)
                .then(function(response) {
                    if(response.status == 200) {
                        self.$emit('comment-posted', response);
                        self.formData.body = null;
                    }
                    self.requesting = false;
                })
                .catch(function(error) {
                    if(error.response.status == 401) {
                        document.location = url('login');
                    }
                    self.requesting = false;
            });

            this.ga('create', 'Comment Create');
        },

        ga(eventAction, eventLabel = '') {
            if (!window.ga) return;

            ga('send', {
                hitType: 'event',
                eventCategory: 'Comments',
                eventAction: eventAction,
                eventLabel: eventLabel,
            });
        },
    },
};
</script>
