@extends('viender::layouts.app')

@section('content')
<div class="mobile">
    <question-list question-url="{{ route('api.viender.socialite.questions.index') }}"></question-list>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/answer/app-mobile.css') }}>
@endsection

@section('scripts')
<script>
    window.$appScript = function() {
        window.$loadScript({
            d: document,
            tag: 'script',
            id: 'app-script',
            url: "{{ mix('js/viender/socialite/answer/app-mobile.js') }}",
            onload: function() {
                window.$app();
            }
        });
    };
</script>
@endsection
