<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

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
    </script>

    <!-- Styles -->
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    @yield('head-styles')
    @yield('head-scripts')
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
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
