@extends('viender::layouts.app')

@section('content')
<div class="mobile">
    <notification-list
        notifications-url="{{ route('api.viender.notification.notifications.index') }}">
    </notification-list>
</div>
@endsection

@section('head-styles')
<link rel="stylesheet" href={{ mix('css/viender/notification/notification/app-mobile.css') }}>
@endsection

@section('scripts')
<script>
    window.$loadScript({
        d: document,
        tag: 'script',
        id: 'app-script',
        url: "{{ mix('js/viender/notification/notification/app-mobile.js') }}",
        onload: function() {
            window.$appScriptLoaded = true;
            window.$runApp();
        }
    });
</script>
@endsection
