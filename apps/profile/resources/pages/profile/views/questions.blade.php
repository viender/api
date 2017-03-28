@extends('viender.profile.layouts::profile', ['currentMenu' => 1])

@section('profile-content')
	<question-list question-url="{{ route('api.viender.socialite.users.questions.index', $user->username) }}"></question-list>
@endsection
