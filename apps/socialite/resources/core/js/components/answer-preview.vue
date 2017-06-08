<template>
    <div class="answer">
        <div class="answer-container">
            <div class="card">
                <div class="card-content">
                    <a :href="getUrl('self_html', answer.question)" v-if="showQuestion"><h2 class="card-title">{{ answer.question.title || 'Deleted question.' }}</h2></a>
                    <ul class="collection">
                        <li class="collection-item avatar">
                            <img :src="getUrl('avatar', answer.owner)" alt="" class="circle">
                            <a :href="getUrl('self_html', answer.owner)" @click="$event.stopPropagation()">
                                <span class="answer-content-owner">
                                    {{ `${answer.owner.name}${(answer.credential.id ? ', ' : '')}` }}
                                </span>
                            </a>
                            <span v-if="answer.credential.id" v-html="$viender.helpers.answersCredentialHtml(answer.credential)"></span>
                        </li>
                    </ul>
                    <div class="answer-content" v-if="!answer.deleted_at" @click="showAnswer()">
                        <div style="display: inline" v-html="answer.preview"></div>
                        <a style="cursor: pointer" v-if="answer.preview.length >= 258">(more)</a>
                    </div>
                    <div class="answer-content" style="padding-bottom: 10px;" v-else>
                        <span>Deleted.</span>
                        <a @click="restore()">Restore</a>
                    </div>
                </div>
                <div class="card-action" v-if="!answer.deleted_at">
                    <ul class="card-action-list">
                        <li class="card-action-item">
                            <span style="cursor: pointer;" @click="upvote">
                                <span style="padding-right: 5px;">{{ answer.upvote_count }}</span>
                                <a class="material-icons dp48" :class="answer.upvoted ? 'active' : ''">thumb_up</a>
                            </span>
                        </li>
                        <li class="card-action-item">
                            <a @click="downvote" class="material-icons dp48" :class="answer.downvoted ? 'active' : ''">thumb_down</a>
                        </li>
                        <li class="card-action-item">
                            <a @click="toggleComments()">Comments <span>({{ answer.comment_count }})</span></a>
                        </li>
                        <li class="card-action-item--right">
                            <more-menu :model="answer"></more-menu>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <comment-list :commentable="answer" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
    </div>
</template>

<script>
import answerMixin from '../mixins/answerMixin';
import urlHelper from 'viender_core/js/mixins/urlHelper';

export default {
    mixins: [answerMixin, urlHelper],
};
</script>
