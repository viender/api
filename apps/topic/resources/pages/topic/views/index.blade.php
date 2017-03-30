@extends('viender.topic.layouts::topic', ['currentMenu' => 0])

@section('topic-content')
	<h5>Feed</h5>
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.topics.answers.index', $topic) }}' }"></feed-list>
			<answer-show-modal></answer-show-modal>
@endsection
