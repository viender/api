@extends('viender::layouts.app')

@section('content')
<div class="mobile">
    <answer :answer="{{ json_encode($transformedAnswer) }}"></answer>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app-mobile.css') }}>
@endsection

@section('scripts')
<script>
    window.$loadScript({
        d: document,
        tag: 'script',
        id: 'app-script',
        url: "{{ mix('js/viender/socialite/read/app-mobile.js') }}",
        onload: function() {
            window.$appScriptLoaded = true;
            window.$runApp();
        }
    });
</script>
@endsection
