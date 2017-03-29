<ul ref="profileNav" class="profileNavigation-list" initial-menu="{{ $currentMenu }}">
	<li class="profileNavigation-item">
		<a :class="currentMenu(0) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.profile', $user->username) }}" @click="setCurrentMenu(0)">
			<span class="profileNavigation-label">Answers</span>
			<span class="profileNavigation-value">{{ $user->answers->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(1) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.questions', $user->username) }}" @click="setCurrentMenu(1)">
			<span class="profileNavigation-label">Questions</span>
			<span class="profileNavigation-value">{{ $user->questions->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(2) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.topics', $user->username) }}" @click="setCurrentMenu(2)">
			<span class="profileNavigation-label">Topics</span>
			<topic-count topic-count="{{ $user->followedTopics()->count() }}" @mounted="hideBeforeMountedPreloaders()"></topic-count>
			<span class="profileNavigation-value" v-if="notMounted">{{ $user->followedTopics()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(3) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.followings', $user->username) }}" @click="setCurrentMenu(3)">
			<span class="profileNavigation-label">Followings</span>
			<following-count following-count="{{ $user->followedUsers()->count() }}" @mounted="hideBeforeMountedPreloaders()"></following-count>
			<span class="profileNavigation-value" v-if="notMounted">{{ $user->followedUsers()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(4) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.followers', $user->username) }}" @click="setCurrentMenu(4)">
			<span class="profileNavigation-label">Followers</span>
			<follower-count follower-count="{{ $user->followers->count() }}" @mounted="hideBeforeMountedPreloaders()"></follower-count>
			<span class="profileNavigation-value" v-if="notMounted">{{ $user->followers->count() }}</span>
		</a>
	</li>
	@if(\Auth::user() ? \Auth::user()->id != $user->id : false)
		<li class="profileNavigation-item" style="float: right; padding-top: 12px;">
			<follow-user-button
				followee_id="{{ $user->id }}"
				url="{{ route('api.viender.follow.users.followings.store', \Auth::user()) }}"
				followed="{{ (\Auth::user()->followings()->where([
			            'follower_id'   => \Auth::user()->id,
			            'followee_id'   => $user->id,
			            'followee_type' => \App\User::class,
			        ])->exists()) }}">
			</follow-user-button>
		</li>
	@endif
</ul>
