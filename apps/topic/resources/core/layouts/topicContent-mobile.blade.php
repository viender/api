<div ref="profileContentMobile" style="display: none;">
	<div v-if=currentMenu(0)>
		<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.topics.answers.index', $topic) }}' }"></feed-list>
		<answer-show-modal></answer-show-modal>
	</div>

	<div v-if=currentMenu(1)>
		<question-list question-url="{{ route('api.viender.socialite.topics.questions.index', $topic) }}"></question-list>
	</div>

	<div v-if=currentMenu(2)>
		<follower-list url="{{ route('api.viender.follow.topics.followers.index', $topic) }}"></follower-list>
	</div>
</div>
