@extends('viender.profile.layouts::profile', ['currentMenu' => 0])

@section('profile-content')
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.users.answers.index', $user->username) }}' }"></feed-list>
	<answer-show-modal></answer-show-modal>
@endsection
