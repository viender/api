/**
 * Model
 */
export default class {

    /**
     * Create new Answer object
     * @param  {Object} data answer object data
     */
    constructor(data) {
        for (let k in data) {
            if (true) {
                this[k]=data[k];
            }
        }
        this.requestingUpvote = false;
        this.requestingDownvote = false;
        this.requestingComment = false;
        this.requestingFetchComments = false;
        this.commentsPage = 1;
        this.comments = [];
        this.$viender = Vue.prototype.$viender;
    }

    /**
     * Upvote model
     * @return {Promise}
     */
    upvote() {
        return new Promise((resolve, reject) => {
            const self = this;

            if(self.requestingUpvote) return;

            self.requestingUpvote = true;

            axios.post(self.$viender.helpers.getUrl('upvotes', self), {})
                .then((response) => {
                    if(response.status == 201) {
                        self.upvote_count += 1;
                        self.upvoted = true;
                        self.downvoted = false;
                    }
                    if(response.status == 204) {
                        self.upvote_count -= 1;
                        self.upvoted = false;
                    }
                    self.requestingUpvote = false;
                    resolve(response);
                })
                .catch((error) => {
                    if(error.response.status == 401) {
                        document.location = url('login');
                    }
                    self.requestingUpvote = false;
                    reject(error);
            });
        });
    }

    /**
     * Downvote model
     * @return {Promise}
     */
    downvote() {
        return new Promise((resolve, reject) => {
            const self = this;

            if(self.requestingDownvote) return;

            self.requestingDownvote = true;

            axios.post(self.$viender.helpers.getUrl('downvotes', self), {})
                .then((response) => {
                    if(response.status == 201) {
                        if(self.upvoted)
                            self.upvote_count -= 1;
                        self.upvoted = false;
                        self.downvoted = true;
                    }
                    if(response.status == 204) {
                        self.downvoted = false;
                    }
                    self.requestingDownvote = false;
                    resolve(response);
                })
                .catch((error) => {
                    if(error.response.status == 401) {
                        document.location = url('login');
                    }
                    self.requestingDownvote = false;
                    reject(error);
            });
        });
    }

    /**
     * Comment model
     * @return {Promise}
     */
    comment({body}) {
        return new Promise((resolve, reject) => {
            const self = this;

            if(self.requestingComment) return;

            if( ! body) return;

            self.requestingComment = true;

            axios.post(self.$viender.helpers.getUrl('comments', self) + '?with=owner', {body})
                .then((response) => {
                    self.requestingComment = false;
                    resolve(response.data);
                })
                .catch((error) => {
                    if(error.response.status == 401) {
                        document.location = url('login');
                    }
                    self.requestingComment = false;
                    reject(error);
            });
        });
    }

    /**
     * Fetch model comments
     * @return {[type]} [description]
     */
    fetchComments() {
        return new Promise((resolve, reject) => {
            const self = this;

            if(self.requestingFetchComments) return;

            self.requestingFetchComments = true;

            axios.get(self.$viender.helpers.getUrl('comments', self), {
                params: {
                    with: ['owner'],
                    page: self.commentsPage,
                },
            })
            .then((response) => {
                self.commentsPage++;
                self.requestingFetchComments = false;
                resolve(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                self.requestingFetchComments = false;
                reject(error);
            });
        });
    }
}
