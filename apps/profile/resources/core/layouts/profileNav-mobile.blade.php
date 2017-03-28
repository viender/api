<ul ref="profileNav" class="profileNavigation-list" initial-menu="{{ $currentMenu }}">
	<li class="profileNavigation-item">
		<a :class="currentMenu(0) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.profile', $user->username) }}" page ="answers" @click="setCurrentMenu(0)" @click.prevent="">
			<span class="profileNavigation-label">Answers</span>
			<span class="profileNavigation-value">{{ $user->answers->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(1) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.questions', $user->username) }}" page ="questions" @click="setCurrentMenu(1)" @click.prevent="">
			<span class="profileNavigation-label">Questions</span>
			<span class="profileNavigation-value">{{ $user->questions->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(2) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.topics', $user->username) }}" page ="topics" @click="setCurrentMenu(2)" @click.prevent="">
			<span class="profileNavigation-label">Topics</span>
			<span class="profileNavigation-value">0</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(3) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.followings', $user->username) }}" page ="followings" @click="setCurrentMenu(3)" @click.prevent="">
			<span class="profileNavigation-label">Followings</span>
			<following-count following-count="{{ $user->followings->count() }}" @mounted="hideFollowerCountPreloader()"></following-count>
			<span class="profileNavigation-value" v-if="showFollowerCountPreloader">{{ $user->followings->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(4) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.followers', $user->username) }}" page ="followers" @click="setCurrentMenu(4)" @click.prevent="">
			<span class="profileNavigation-label">Followers</span>
			<follower-count follower-count="{{ $user->followers->count() }}" @mounted="hideFollowerCountPreloader()"></follower-count>
			<span class="profileNavigation-value" v-if="showFollowerCountPreloader">{{ $user->followers->count() }}</span>
		</a>
	</li>
</ul>
