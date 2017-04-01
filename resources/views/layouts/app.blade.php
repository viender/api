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

        function hideSplash() {
            var el = document.getElementById('splash');
            if (el) {
                el.className = 'splash splash-hidden';
                document.getElementsByTagName('body')[0].style.overflow = 'scroll';
            }
        }

        window.addEventListener("load", function(event) {
            const timeoutTime = (document.getElementsByClassName('splash-text')[0]) ? 30000 : 1;
            setTimeout(function() {
                hideSplash();
            }, timeoutTime);
        });
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

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js" defer async></script>
    <script src={{ mix('js/core.js') }}></script>
    @yield('head-scripts')
</head>
<body style="{{ ! \Agent::isDesktop() ? 'overflow: hidden;' : '' }}">
    <div id="app" class="main-content">
        <header>
            @if(\Agent::isDesktop())
                @include('viender::layouts.nav')
            @else
                @if(rand(0,10) > 9)
                    @php
                        $http = new GuzzleHttp\Client;
                        $response = $http->post('http://api.forismatic.com/api/1.0/', [
                            'form_params' => [
                                'method'    => 'getQuote',
                                'key'       => '457653',
                                'format'    => 'json',
                                'lang'      => 'en'
                            ],
                        ]);
                        $quote = json_decode((string) $response->getBody(), true);
                    @endphp
                    <div id="splash" class="splash">
                        <span class="splash-text splash-logo">Viender</span>
                        <span class="splash-text">"{{ strip_tags($quote['quoteText']) }}"</span>
                        <span class="splash-text splash-text-author">- {{ $quote['quoteAuthor'] }}</span>
                        <span class="splash-text splash-action" onclick="hideSplash()">Continue to viender >>></span>
                    </div>
                @else
                    <div id="splash" class="splash"></div>
                @endif
                <script>
                    document.getElementById('splash').className = 'splash splash-visible';
                </script>
                @include('viender::layouts.nav-mobile')
            @endif
        </header>
        
        <main>
            @yield('content')
        </main>
    </div>
    <!-- Scripts -->
    @yield('scripts')
</body>
</html>
