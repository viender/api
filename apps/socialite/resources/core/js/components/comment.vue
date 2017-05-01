<template>
    <div class="comment">
        <img :src="getUrl('avatar', comment.owner)" alt="" class="u-dimension--small circle comment-avatar">
        <span class="comment-owner">
          <strong>
            <a class="profile-link" :href="$viender.helpers.getUrl('self_html', comment.owner)">{{ comment.owner.name }}</a>
          </strong>
        </span>
        <div class="comment-body">
            <p>{{ comment.body }}</p>
        </div>
        <div class="comment-action">
            <ul class="card-action-list">
                <li class="card-action-item">
                    <span class="comment-action--item" @click="upvote">
                      <span>{{ upvoteCount }}</span>
                      <a class="material-icons dp48" :class="comment.upvoted ? 'active' : ''">thumb_up</a>
                    </span>
                </li>
                <li class="card-action-item">
                    <a class="comment-action--item material-icons dp48" :class="comment.downvoted ? 'active' : ''" @click="downvote">thumb_down</a>
                </li>
                <li class="card-action-item">
                    <a class="comment-action--item" @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
                </li>
            </ul>
          <comment-list :comments-url="getUrl('comments', comment)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
        </div>
    </div>
</template>

<script>
export default {
  props: ['comment'],

  mixins: [require('viender_core/js/mixins/urlHelper')],

  data() {
    return {
      requesting: false,
      upvoteCount: 0,
      commentCount: 0,
      showComments: false,
    };
  },

  mounted() {
    this.upvoteCount = this.comment.upvote_count;
    this.commentCount = this.comment.comment_count;
  },

  methods: {
    upvote() {
      const _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(this.getUrl('upvotes', this.comment), {})
      .then((response) => {
        if (response.status == 201) {
          _this.upvoteCount += 1;
          _this.comment.upvoted = true;
          _this.comment.downvoted = false;
        }
        if (response.status == 204) {
          _this.upvoteCount -= 1;
          _this.comment.upvoted = false;
        }
        _this.requesting = false;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },

    downvote() {
      const _this = this;

      if (_this.requesting) return;

      _this.requesting = true;

      axios.post(this.getUrl('downvotes', this.comment), {})
      .then((response) => {
        if (response.status == 201) {
          if (_this.comment.upvoted) { _this.upvoteCount -= 1; }
          _this.comment.upvoted = false;
          _this.comment.downvoted = true;
        }
        if (response.status == 204) {
          _this.comment.downvoted = false;
        }
        _this.requesting = false;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          document.location = url('login');
        }
        _this.requesting = false;
      });
    },

    toggleComments() {
      this.showComments = !this.showComments;
    },

    updateCommentCount() {
      this.commentCount++;
    },
  },
};
</script>
