<ul ref="topicNav" class="profileNavigation-list" initial-menu="{{ $currentMenu }}">
	<li class="profileNavigation-item">
		<a :class="currentMenu(0) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.topic.pages.topic.index', $obj) }}" page ="answers" @click.prevent="setCurrentMenu(0)">
			<span class="profileNavigation-label">Answers</span>
			<span class="profileNavigation-value">{{ $obj->answers()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(1) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.topic.pages.topic.questions', $obj) }}" page ="questions" @click.prevent="setCurrentMenu(1)">
			<span class="profileNavigation-label">Questions</span>
			<span class="profileNavigation-value">{{ $obj->questions()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(2) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.topic.pages.topic.followers', $obj) }}" page ="followers" @click.prevent="setCurrentMenu(2)">
			<span class="profileNavigation-label">Followers</span>
			<follower-count follower-count="{{ $obj->followers()->count() }}" @mounted="hideBeforeMountedPreloaders()"></follower-count>
			<span class="profileNavigation-value" v-if="notMounted">{{ $obj->followers->count() }}</span>
		</a>
	</li>
</ul>
