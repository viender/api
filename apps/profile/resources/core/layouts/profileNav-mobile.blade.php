<ul ref="profileNav" class="profileNavigation-list" initial-menu="{{ $currentMenu }}">
	<li class="profileNavigation-item">
		<a :class="currentMenu(0) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.profile', $obj->username) }}" page ="answers" @click.prevent="setCurrentMenu(0)">
			<span class="profileNavigation-label">Answers</span>
			<span class="profileNavigation-value">{{ $obj->answers()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(1) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.questions', $obj->username) }}" page ="questions" @click.prevent="setCurrentMenu(1)">
			<span class="profileNavigation-label">Questions</span>
			<span class="profileNavigation-value">{{ $obj->questions()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(2) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.topics', $obj->username) }}" page ="topics" @click.prevent="setCurrentMenu(2)">
			<span class="profileNavigation-label">Topics</span>
			<topic-count topic-count="{{ $obj->followedTopics()->count() }}" @mounted="hideBeforeMountedPreloaders()"></topic-count>
			<span class="profileNavigation-value" v-if="notMounted">{{ $obj->followedTopics()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(3) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.followings', $obj->username) }}" page ="followings" @click.prevent="setCurrentMenu(3)">
			<span class="profileNavigation-label">Followings</span>
			<following-count following-count="{{ $obj->followedUsers()->count() }}" @mounted="hideBeforeMountedPreloaders()"></following-count>
			<span class="profileNavigation-value" v-if="notMounted">{{ $obj->followedUsers()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(4) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.profile.pages.followers', $obj->username) }}" page ="followers" @click.prevent="setCurrentMenu(4)">
			<span class="profileNavigation-label">Followers</span>
			<follower-count follower-count="{{ $obj->followers()->count() }}" @mounted="hideBeforeMountedPreloaders()"></follower-count>
			<span class="profileNavigation-value" v-if="notMounted">{{ $obj->followers->count() }}</span>
		</a>
	</li>
</ul>
