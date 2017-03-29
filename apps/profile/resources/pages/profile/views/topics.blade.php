@extends('viender.profile.layouts::profile', ['currentMenu' => 2])

@section('profile-content')
	<topic-list url="{{ route('api.viender.topic.users.topics.index', $user) }}"></topic-list>
@endsection
