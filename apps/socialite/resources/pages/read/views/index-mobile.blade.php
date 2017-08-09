@extends('viender::layouts.app')

@section('content')
<div class="mobile">
    <tutorial></tutorial>
	<feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.answers.index') }}' }"></feed-list>
	<answer-show-modal></answer-show-modal>
    <answer-create-modal :url="$viender.helpers.getUrl('self', $store.state.editor.content)" :init-content="true" @answer-posted="hideActiveMoreMenu()"></answer-create-modal>
</div>
<sort-button></sort-button>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app-mobile.js') }} async defer></script>
@endsection
