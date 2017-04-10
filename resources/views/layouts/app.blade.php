<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f5f5f5">
    <meta name="mobile-web-app-capable" content="yes">

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
                'api_url'   => config('app.api_url'),
                'domain'    => config('app.domain'),
            ],
            'client'    => [
                'type'      => \Agent::isDesktop() ? 'desktop' : 'mobile',
                'device'    => \Agent::device(),
                'platform'  => \Agent::platform(),
                'browser'   => \Agent::browser(),
            ],
        ])
        !!};
    </script>

    <link rel="manifest" href="/manifest.json">
    <link rel="icon" sizes="128x128" href="/img/icons/launcher-icon-2x.png">

    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    @yield('head-styles')
    @if(\Agent::isDesktop())
        <link rel="stylesheet" href={{ mix('css/core.css') }}>
    @else
        <link rel="stylesheet" href={{ mix('css/core-mobile.css') }}>
        <style>
            .splash {
                position: fixed;
                z-index: 999;
                width: 100%;
                height: 100%;
                background-color: #50a7e6;
                padding: 10px;
                visibility: hidden;
            }

            .splash-text {
                display: block;
                font-weight: 600;
                color: #fff;
                text-align: center;
                font-size: 1.3rem;
            }

            .splash-logo {
                padding-top: 3rem;
                padding-bottom: 3rem;
                text-align: left;
                font-size: 2rem;
            }

            .splash-text-author {
                text-align: right;
                padding-top: 20px;
            }

            .splash-action {
                padding-top: 20px;
                font-style: italic;
            }

            .splash-visible {
              visibility: visible;
              opacity: 1;
              transition: opacity 0.25s linear;
            }

            .splash-hidden {
              visibility: hidden;
              opacity: 0;
              transition: visibility 0s 0.25s, opacity 0.25s linear;
            }
        </style>
    @endif

    <style>
        [v-cloak] {
            display: none;
        }

        .topic {
            padding: 2px 5px;
            margin-right: 5px;
            border-radius: 4px;
        }

        .hidden {
            display: none;
        }

        .searchOverlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .9);
            z-index: 10;
            margin-top: 45px;
        }

        .searchOverlay-content {
            background: #fff;
            height: 80%;
            width: 40rem;
            margin: 0 auto;
            overflow-x: auto;
            margin-top: 2rem !important;
            border-radius: 3px;
        }

        .topicRecommendation {
            width: 273px;
            background-color: rgb(255, 255, 255);
            opacity: 1;
            position: absolute;
            height: initial !important;
            z-index: 8;
        }

        .topicRecommendation .collection {
            position: relative;
            max-height: 350px;
            overflow-y: auto;
            width: 273px;
            margin-top: 0;
        }

        .topicRecommendation .collection-item{
            float: initial;
            height: 50px;
            padding: 0 10px;
            line-height: 350%;
            white-space: nowrap;
        }

        .topicRecommendation .collection-item a {
            padding: 0;
            width: 100%;
            height: 100%;
        }

        .topicRecommendation .collection-item a:hover {
            background-color: #fff;
        }
    </style>

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js" defer async></script>
    <script src={{ mix('js/core.js') }}></script>
    @yield('head-scripts')
</head>
<body>
    <div id="app" class="main-content">
        <header role="header">
            @if(\Agent::isDesktop())
                @include('viender::layouts.nav')
            @else
                @include('viender::layouts.nav-mobile')
            @endif
        </header>

        <main role="main">
            @yield('content')
        </main>
    </div>
    <!-- Scripts -->
    @yield('scripts')
</body>
</html>
