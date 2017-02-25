window.commentableMixin = {
    mixins: [hasLinksMixin],

    data() {
        return {
            loading: false,

            commentTextArea: {
                body: '',
                cols: 30,
                rows: 1,
            }
        }
    },

    methods: {
        postComment(obj) {
            vm = this;

            if(vm.commentTextArea.body === '' || vm.loading) {
                return;
            }

            vm.loading = true;

            var commentsUrl = vm.getUrl('self', obj) + "/comments?with=owner";

            axios.post(commentsUrl, {
                body: vm.commentTextArea.body
            })
            .then(function (response) {
                vm.loading = false;
                vm.commentTextArea.body = '';
                vm.comments.data.unshift(response.data);
                console.log(response);
            })
            .catch(function (error) {
                vm.loading = false;
                console.log(error);
            });
        }
    }
}