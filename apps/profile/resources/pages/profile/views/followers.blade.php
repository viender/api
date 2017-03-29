@extends('viender.profile.layouts::profile', ['currentMenu' => 4])

@section('profile-content')
	<follower-list url="{{ route('api.viender.follow.users.followers.index', $user) }}"></follower-list>
@endsection
