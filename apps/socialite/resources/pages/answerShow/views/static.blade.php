@extends('viender::layouts.app')

@section('content')
<div class="" style="padding-top: 5px;">
    <div class="row">
        <div class="col s3">

        </div>
        <div class="col s6">
            <h5>Top stories for you</h5>
            <answer :answer="{{ json_encode($transformedAnswer) }}"></answer>
        </div>
        <div class="col s3">

        </div>
    </div>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/socialite/read/app.css') }}>
@endsection

@section('scripts')
<script>
    window.$appScript = function() {
        window.$loadScript({
            d: document,
            tag: 'script',
            id: 'app-script',
            url: "{{ mix('js/viender/socialite/read/app.js') }}",
            onload: function() {
                window.$app();
            }
        });
    };
</script>
@endsection
