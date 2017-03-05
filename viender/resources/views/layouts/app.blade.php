<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    @if( \Agent::isDesktop())
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    @else
        <meta name="viewport" content="width=device-width, initial-scale=1">
    @endif

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>

        var config = {
            app: {
                env: '{{ config('app.env') }}',
                url: '{{ config('app.url') }}',
                domain: '{{ config('app.domain') }}',
            },
            services: {
                viender: {
                    url: '{{ config('app.api_url') }}',
                    access_token_cookie_name: '{{ config('services.viender.access_token_cookie_name') }}',
                    refresh_token_cookie_name: '{{ config('services.viender.refresh_token_cookie_name') }}',
                }
            }
        };

        /**
         * Helper function to get full path of an url
         *
         * @param  String path
         * @return String
         */

        window.url = function url(path) {
            if(path[0] === '/') {
                return config.app.url + path;
            }

            return config.app.url + '/' + path;
        }

        /**
         * Helper function to get full path of an api url
         *
         * @param  String path
         * @return String
         */
        window.api = function api(path) {
            if(path[0] === '/') {
                return config.services.viender.url + path;
            }

            return config.services.viender.url + '/' + path;
        }
    </script>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-93071703-1', 'auto');
        ga('send', 'pageview');
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
            @include('layouts.nav')
        @else
            @include('layouts.nav-mobile')
        @endif

        @yield('content')
        <!-- Scripts -->
    </div>
    @yield('scripts')
</body>
</html>