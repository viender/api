<ul ref="profileNav" class="profileNavigation-list" initial-menu="{{ $currentMenu }}">
	<li class="profileNavigation-item">
		<a :class="currentMenu(0) ? 'is-active' : ''" href="{{ route('web.viender.profile.pages.profile', $user->username) }}" @click="setCurrentMenu(0)">
			<span class="profileNavigation-label">Answers</span>
			<span class="profileNavigation-value">{{ $user->answers->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(1) ? 'is-active' : ''" href="{{ route('web.viender.profile.pages.questions', $user->username) }}" @click="setCurrentMenu(1)">
			<span class="profileNavigation-label">Questions</span>
			<span class="profileNavigation-value">{{ $user->questions->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(2) ? 'is-active' : ''" href="{{ route('web.viender.profile.pages.topics', $user->username) }}" @click="setCurrentMenu(2)">
			<span class="profileNavigation-label">Topics</span>
			<span class="profileNavigation-value">0</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(3) ? 'is-active' : ''" href="{{ route('web.viender.profile.pages.followings', $user->username) }}" @click="setCurrentMenu(3)">
			<span class="profileNavigation-label">Followings</span>
			<span class="profileNavigation-value">{{ $user->followings->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(4) ? 'is-active' : ''" href="{{ route('web.viender.profile.pages.followers', $user->username) }}" @click="setCurrentMenu(4)">
			<span class="profileNavigation-label">Followers</span>
			<span class="profileNavigation-value">{{ $user->followers->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item" style="float: right; padding-top: 12px;">
		<button class="btn">Follow</button>
	</li>
</ul>
