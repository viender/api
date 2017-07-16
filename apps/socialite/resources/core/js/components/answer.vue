<template>
    <div class="answer">
        <div class="answer-container">
            <div class="card" v-if="answerObj">
                <div class="card-content">
                    <a :href="getUrl('self_html', answerObj.question)" v-if="showQuestion"><h2 class="card-title">{{ answerObj.question.title || 'Deleted question.'  }}</h2></a>
                    <hr style="margin-bottom: 30px;">
                    <ul class="collection">
                        <li class="collection-item avatar">
                            <img :src="getUrl('avatar', answerObj.owner)" alt="" class="circle">
                            <a :href="getUrl('self_html', answerObj.owner)">
                                <span class="answer-content-owner">{{ answerObj.owner.name }}</span>
                            </a>
                            <credential
                                :credential="answerObj.credential"
                                v-if="answerObj.credential.id"
                                :with-link="true">
                            </credential>
                        </li>
                    </ul>
                    <div class="answer-content" v-html="answerObj.body" v-if="!answerObj.deleted_at"></div>
                    <div class="answer-content" style="padding-bottom: 10px;" v-else>
                        <span>Deleted.</span>
                        <a @click="restore()">Restore</a>
                    </div>
                </div>
                <div class="card-action" v-if="!answerObj.deleted_at">
                    <ul class="card-action-list">
                        <li class="card-action-item">
                            <span style="cursor: pointer;" @click="upvote">
                                <span style="padding-right: 5px;">{{ answerObj.upvote_count }}</span>
                                <a class="material-icons dp48" :class="answerObj.upvoted ? 'active' : ''">thumb_up</a>
                            </span>
                        </li>
                        <li class="card-action-item">
                            <a @click="downvote" class="material-icons dp48" :class="answerObj.downvoted ? 'active' : ''">thumb_down</a>
                        </li>
                        <li class="card-action-item">
                            <a @click="toggleComments()">Comments <span>({{ answerObj.comment_count }})</span></a>
                        </li>
                        <li class="card-action-item--right">
                            <more-menu ref="moreMenu" :model="answerObj" v-if="$viender.treasure.client.type === 'desktop'" @click-edit="openEditOverlay">
                            </more-menu>
                            <more-menu-mobile ref="moreMenu" :model="answerObj" v-else @click-edit="openEditOverlay">
                            </more-menu-mobile>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <comment-list :commentable="answerObj" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
    </div>
</template>

<script>
import answerMixin from '../mixins/answerMixin';
import urlHelper from 'viender_core/js/mixins/urlHelper';
import credential from 'viender_credential/core/js/components/credential';
import moreMenuMobile from './more-menu-mobile';

export default {
    mixins: [answerMixin, urlHelper],

    components: {
        credential,
        moreMenuMobile,
    },
};
</script>
