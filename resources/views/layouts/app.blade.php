<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>; 
        window.treasure = {
            client: {
                type: '{{ \Agent::isDesktop() ? 'desktop' : 'mobile' }}',
                device: '{{ \Agent::device() }}',
                platform: '{{ \Agent::platform() }}',
                browser: '{{ \Agent::browser() }}',
            }
        };
    </script>

    <!-- Styles -->
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

    @yield('head-styles')

    <!-- Scripts -->
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
        <!-- Scripts -->
    </div>
    @yield('scripts')
</body>
</html>