@extends('viender::layouts.app')

@section('content')
<div class="mobile">
    <answer answer-url="/questions/Dolorum-incidunt-est-alias-qui-hic-dolores-dolores/answers/goldencat173"></answer>
    <feed-list :feed-urls="{ answers: '{{ route('api.viender.socialite.answers.index') }}' }"></feed-list>
    <answer-show-modal></answer-show-modal>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
@endsection

@section('scripts')
<script src={{ mix('js/viender/socialite/read/app-mobile.js') }} async defer></script>
@endsection
