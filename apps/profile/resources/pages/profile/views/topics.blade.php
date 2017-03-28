@extends('viender.profile.layouts::profile', ['currentMenu' => 2])

@section('profile-content')
	@if(\Auth::user() ? \Auth::user()->id === $user->id : false)
		<span>Topics you follow:</span>
	@else
		<span>Topics followed by {{ $user->first_name }}:</span>
	@endif
@endsection
