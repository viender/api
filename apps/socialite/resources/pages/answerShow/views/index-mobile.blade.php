@extends('viender::layouts.app')

@include('viender.socialite.answerShow::components/answer-header')

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
<script>
    window.$appScript = function() {
        window.$loadScript({
            d: document,
            tag: 'script',
            id: 'app-script',
            url: "{{ mix('js/viender/socialite/read/app-mobile.js') }}",
            onload: function() {
                window.$app();
            }
        });
    };
</script>
@endsection
