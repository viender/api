@extends('viender.profile.layouts::profile', ['currentMenu' => 3])

@section('profile-content')
	@if(\Auth::user() ? \Auth::user()->id === $user->id : false)
		<span>People you follow:</span>
	@else
		<span>People followed by {{ $user->first_name }}:</span>
	@endif
	<following-list url="{{ route('api.viender.follow.users.followings.index', $user) }}"></following-list>
@endsection
