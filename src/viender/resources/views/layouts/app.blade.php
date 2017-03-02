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

    <!-- Styles -->
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link href={{ mix('css/app.css') }} rel="stylesheet">
    <link href="/css/vue-material.css" rel="stylesheet">

    @yield('head')
</head>
<body>
    <div id="app" class="main-content">
        @include('layouts.nav')
        @yield('content')
    </div>

    <!-- Scripts -->
    @yield('scripts')
</body>
</html>