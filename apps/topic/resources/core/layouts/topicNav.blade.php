<ul ref="topicNav" class="profileNavigation-list" initial-menu="{{ $currentMenu }}">
	<li class="profileNavigation-item">
		<a :class="currentMenu(0) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.topic.pages.topic.show', $obj) }}" page ="answers">
			<span class="profileNavigation-label">Answers</span>
			<span class="profileNavigation-value">{{ $obj->answers()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(1) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.topic.pages.topic.questions', $obj) }}" page ="questions">
			<span class="profileNavigation-label">Questions</span>
			<span class="profileNavigation-value">{{ $obj->questions()->count() }}</span>
		</a>
	</li>
	<li class="profileNavigation-item">
		<a :class="currentMenu(2) ? 'navigationLink is-active' : 'navigationLink'" href="{{ route('web.viender.topic.pages.topic.followers', $obj) }}" page ="followers">
			<span class="profileNavigation-label">Followers</span>
			<follower-count follower-count="{{ $obj->followers()->count() }}" @mounted="hideBeforeMountedPreloaders()"></follower-count>
			<span class="profileNavigation-value" v-if="notMounted">{{ $obj->followers->count() }}</span>
		</a>
	</li>
    @if(\Auth::user())
        <li class="profileNavigation-item right">
            <ajax-button
                ref="followTopicButton"
                class="btn followButton {{ \Auth::user()->followedTopics()->where('followable_id', $topic->id)->exists() ? 'followed' : '' }}"
                url="{{ route('api.viender.topic.users.topics.store', \Auth::user()) }}"
                action="post"
                :data="{ topic_id: {{ $topic->id }} }"
                @success="followSuccessHandle($event)"
                @error="followErrorHandle($event)"
                >
                {{ \Auth::user()->followedTopics()->where('followable_id', $topic->id)->exists() ? 'Unfollow' : 'Follow' }}
            </ajax-button>
        </li>
    @endif
</ul>
