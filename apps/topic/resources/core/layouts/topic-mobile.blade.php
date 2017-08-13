@extends('viender::layouts.app')

@section('content')
<div class="topicShow">
	<div class="topicShow-header">
		<div class="topicShow-header-thumbnail">
			<img src="{{ Storage::url($topic->thumbnail) }}" alt="">
		</div>
		<div class="topicShow-header-detail">
			<h4>{{ $topic->name }}</h4>
		</div>
	</div>
	<div class="topicShow-description">
		<p>{{ $topic->description }}</p>

        @if(\Auth::user())
            <div>
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
            </div>
        @endif
	</div>
	@include('viender.topic.layouts::topicNav-mobile', ['currentMenu' => $currentMenu, 'obj' => $topic])
	<div class="topicShow-content">
		@yield('topicShow-content')
	</div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/topic/topic/app-mobile.css') }}>
@endsection

@section('scripts')
<script>
    window.$loadScript({
        d: document,
        tag: 'script',
        id: 'app-script',
        url: "{{ mix('js/viender/topic/topic/app-mobile.js') }}",
        onload: function() {
            window.$appScriptLoaded = true;
            window.$runApp();
        }
    });
</script>
@endsection
