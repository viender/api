<div v-if=currentMenu(0)>
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.users.answers.index', $user->username) }}' }"></feed-list>
	<answer-show-modal></answer-show-modal>
</div>

<div v-if=currentMenu(1)>
	<question-list question-url="{{ route('api.viender.socialite.users.questions.index', $user->username) }}"></question-list>
</div>

<div v-if=currentMenu(2)>
	@if(\Auth::user() ? \Auth::user()->id === $user->id : false)
		<span>Topics you follow:</span>
	@else
		<span>Topics followed by {{ $user->first_name }}:</span>
	@endif
</div>

<div v-if=currentMenu(3)>
	@if(\Auth::user() ? \Auth::user()->id === $user->id : false)
		<span>People you follow:</span>
	@else
		<span>People followed by {{ $user->first_name }}:</span>
	@endif
	<following-list url="{{ route('api.viender.follow.users.followings.index', $user) }}"></following-list>
</div>

<div v-if=currentMenu(4)>
	@if(\Auth::user() ? \Auth::user()->id === $user->id : false)
		<span>Your followers:</span>
	@else
		<span>{{ $user->first_name }}'s followers:</span>
	@endif
	<follower-list url="{{ route('api.viender.follow.users.followers.index', $user) }}"></follower-list>
</div>
