<template>
    <div class="answer">
        <div class="answer-container">
            <div class="card" v-if="answer">
                <div class="card-content">
                    <span class="card-title" v-if="showQuestion">
                        <h4><a :href="getUrl('self_html', answer.question)">{{ answer.question.title }}</a></h4>
                    </span>
                    <hr style="margin-bottom: 30px;">
                    <ul class="collection">
                        <li class="collection-item avatar">
                            <img :src="getUrl('avatar', answer.owner)" alt="" class="circle">
                            <a :href="getUrl('self_html', answer.owner)">
                                <span class="card-title">{{ answer.owner.name }}</span>
                            </a>
                        </li>
                    </ul>
                    <div class="answer-content" v-html="answer.body" v-if="!answer.deleted_at"></div>
                    <div class="answer-content" style="padding-bottom: 10px;">
                        Deleted.
                    </div>
                </div>
                <div class="card-action" v-if="!answer.deleted_at">
                    <ul class="card-action-list">
                        <li class="card-action-item">
                            <span style="cursor: pointer;" @click="upvote">
                                <span style="padding-right: 5px;">{{ upvoteCount }}</span>
                                <a class="material-icons dp48" :class="answer.upvoted ? 'active' : ''">thumb_up</a>
                            </span>
                        </li>
                        <li class="card-action-item">
                            <a @click="downvote" class="material-icons dp48" :class="answer.downvoted ? 'active' : ''">thumb_down</a>
                        </li>
                        <li class="card-action-item">
                            <a @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
                        </li>
                        <li class="card-action-item--right">
                            <more-menu :model="answer"></more-menu>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <comment-list :comments-url="getUrl('comments', answer)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
    </div>
</template>

<script>
import answerMixin from '../mixins/answerMixin';
import urlHelper from 'viender_core/js/mixins/urlHelper';

export default {
    mixins: [answerMixin, urlHelper],
};
</script>
