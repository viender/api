<template>
  <div class="topicCard">
    <img class="topicCard-thumbnail" :src="$viender.helpers.getUrl('thumbnail', topic)" alt="">
    <div class="topicCard-name">
      <a :href="$viender.helpers.getUrl('self_html', topic)">
        {{ topic.name }}
      </a>
    </div>
    <div class="topicCard-action">
      <button class="btn followButton" v-show="! followed" @click="follow()">Follow</button>
      <button class="btn unfollowButton" v-show="followed" @click="unfollow()">Unfollow</button>
    </div>
  </div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
  props: ['topic'],

    mixins: [require('viender_core/js/mixins/urlHelper')],

    data() {
    return {
      requesting: false,
      followed: true,
    }
  },

  created() {
    this.followed = this.topic.followed;
  },

    methods: {
      follow() {
        var _this = this;

        if (_this.requesting) return;

        _this.requesting = true;

        axios.post(_this.$viender.helpers.getUrl('follow', _this.topic), {'topic_id': _this.topic.id})
        .then(function (response) {
          _this.followed = ! _this.followed;

          if (_this.followed) {
            _this.$store.commit('userStats/' + types.INCREMENT_TOPIC_COUNT);
          } else {
            _this.$store.commit('userStats/' + types.DECREMENT_TOPIC_COUNT);
          }

            _this.requesting = false;
        })
        .catch(function (error) {
            if (error.response.status == 401) {
              document.location = url('login');
            }
            _this.requesting = false;
      });
      },

      unfollow() {
        this.follow();
      },
    }
}
</script>
