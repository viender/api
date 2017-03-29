@extends('viender.profile.layouts::profile', ['currentMenu' => 3])

@section('profile-content')
	<following-list url="{{ route('api.viender.follow.users.followings.index', $user) }}"></following-list>
@endsection
