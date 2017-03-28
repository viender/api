@extends('viender.profile.layouts::profile', ['currentMenu' => 4])

@section('profile-content')
	@if(\Auth::user() ? \Auth::user()->id === $user->id : false)
		<span>Your followers:</span>
	@else
		<span>{{ $user->first_name }}'s followers:</span>
	@endif
	<follower-list url="{{ route('api.viender.follow.users.followers.index', $user) }}"></follower-list>
@endsection
