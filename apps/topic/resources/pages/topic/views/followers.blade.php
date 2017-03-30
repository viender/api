@extends('viender.topic.layouts::topic', ['currentMenu' => 2])

@section('topic-content')
	<h5>Followers</h5>
	<follower-list url="{{ route('api.viender.follow.topics.followers.index', $topic) }}"></follower-list>
@endsection
