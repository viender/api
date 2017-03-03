@extends('layouts.app')

@section('content')
<div class="container" style="padding-top: 5px;">
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.answers.index') }}' }"></feed-list>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/feed/app.css') }}>
@endsection

@section('head-scripts')
<script src={{ mix('js/viender/socialite/feed/app.js') }} async="1"></script>
@endsection