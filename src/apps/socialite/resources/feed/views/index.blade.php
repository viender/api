@extends('layouts.app')

@section('content')
<div class="container">
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.answers.index') }}' }"></feed-list>
</div>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/feed/app.js') }}></script>
@endsection