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
<script src={{ mix('js/viender/notification/notification/app-mobile.js') }} async defer></script>
@endsection
