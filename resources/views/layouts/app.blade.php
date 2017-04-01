<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#00acc1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>;

        window.treasure = {!! json_encode([
            'env'       => [
                'env'       => config('app.env'),
                'url'       => config('app.url'),
                'api_url'   => config('app.api_url'),
                'domain'    => config('app.domain'),
            ],
            'client'    => [
                'type'      => \Agent::isDesktop() ? 'desktop' : 'mobile',
                'device'    => \Agent::device(),
                'platform'  => \Agent::platform(),
                'browser'   => \Agent::browser(),
            ]
        ]) !!};

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    // Registration was successful
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }).catch(function(err) {
                    // registration failed :(
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }
    </script>

    <link rel="manifest" href="/manifest.json">
    <link rel="icon" sizes="192x192" href="/favicon.ico">

    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    @yield('head-styles')
    @if(\Agent::isDesktop())
        <link rel="stylesheet" href={{ mix('css/core.css') }}>
    @else
        <link rel="stylesheet" href={{ mix('css/core-mobile.css') }}>
    @endif

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js" defer async></script>
    <script src={{ mix('js/core.js') }}></script>
    @yield('head-scripts')
</head>
<body>
    <div id="app" class="main-content">
        @if(\Agent::isDesktop())
            @include('viender::layouts.nav')
        @else
            @include('viender::layouts.nav-mobile')
        @endif

        @yield('content')
    </div>
    <!-- Scripts -->
    @yield('scripts')
</body>
</html>
