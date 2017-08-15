<!DOCTYPE html>
<html lang="en">
<head prefix="{{ $headPrefix ?? '' }}">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    @if(!\Agent::isDesktop())
        <meta name="viewport" content="width=device-width, initial-scale=1">
    @endif
    <meta name="theme-color" content="#f5f5f5">
    <meta name="mobile-web-app-capable" content="yes">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @if(isset($metaDescription))
        <meta name="description" content="{{ $metaDescription }}">
    @endif

    @yield('more-meta')

    <title>{{ $metaTitle ?? config('app.name', 'Laravel') . (\Agent::isRobot() ? ' -  A place to share knowledge' : '') }}</title>

    @if(isset($_GET['debug_console']) ? $_GET['debug_console'] === '1' : false)
        <script src="//cdn.jsdelivr.net/eruda/1.2.2/eruda.min.js"></script>
        <script>
            eruda.init();
            var erudaConsole = eruda.get('console');
            erudaConsole.config.set('displayExtraInfo', true);
        </script>
    @endif

    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>;
        window.treasure = {!! json_encode([
            'env'       => [
                'env'           => config('app.env'),
                'api_url'       => config('viender.api_url'),
                'domain'        => config('viender.web_domain'),
                'storage_host'  => \Storage::url('.'),
            ],
            'client'    => [
                'type'      => \Agent::isDesktop() ? 'desktop' : 'mobile',
                'device'    => \Agent::device(),
                'platform'  => \Agent::platform(),
                'browser'   => \Agent::browser(),
            ],
        ])
        !!};

        window.$loadScript = function(args){
            var d = args.d;
            var tag = args.tag;
            var id = args.id;
            var url = args.url;
            var async = args.async || true;
            var defer = args.defer || false;
            var onload = args.onload;

            var script, fjs = d.getElementsByTagName(tag)[0];
            if (d.getElementById(id)) {return;}
            script = d.createElement(tag); script.id = id;
            script.type = 'text/javascript';
            script.async = async;
            script.defer = defer;
            script.onload = onload
            script.src = url;
            fjs.parentNode.insertBefore(script, fjs);
        }

        window.$coreScriptLoaded = false;
        window.$appScriptLoaded = false;
        window.$appIsRunning = false;
        window.$runApp = function() {
            if ($coreScriptLoaded && $appScriptLoaded && !$appIsRunning) {
                $appIsRunning = true;
                window.$app();
            }
        }
    </script>

    {{-- <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
    <script>
        var OneSignal = window.OneSignal || [];
        OneSignal.push(["init", {
            appId: "8a0de83d-a36e-443d-8a20-1d9c9811e068",
            autoRegister: true,
            notifyButton: {
                enable: true /* Set to false to hide */
            },
            safari_web_id: 'web.onesignal.auto.2cee7bb2-7604-4e25-b1d2-cbd521c730a5',
        }]);
    </script> --}}
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" sizes="128x128" href="/img/icons/launcher-icon-2x.png">

    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    @yield('head-styles')
    @if(\Agent::isDesktop())
        <link rel="stylesheet" href={{ mix('css/core.css') }}>
    @else
        <link rel="stylesheet" href={{ mix('css/core-mobile.css') }}>
    @endif

    <style>
        [v-cloak] {
            display: none;
        }
    </style>

    {{-- <script src={{ mix('js/core.js') }}></script> --}}
    @yield('head-scripts')
</head>
<body>
    <div id="app" class="main-content">
        <header role="header" class="{{ !\Auth::user() ? 'no-user' : '' }}">
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
    <script>
        // window.fbAsyncInit = function() {
        //     if (window.app) app();
        //     FB.init({
        //         appId            : '{{ config("services.facebook.client_id") }}',
        //         autoLogAppEvents : true,
        //         xfbml            : true,
        //         version          : 'v2.10'
        //     });
        //     FB.AppEvents.logPageView();
        // };

        // (function(d, s, id){
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) {return;}
        //     js = d.createElement(s); js.id = id;
        //     js.src = "//connect.facebook.net/en_US/sdk.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));

        window.$loadScript({
            d: document,
            tag: 'script',
            id: 'core',
            url: "{{ mix('js/core.js') }}",
            onload: function() {
                console.log('coreScriptLoaded');
                window.$coreScriptLoaded = true;
                window.$runApp();
            }
        });
    </script>
</body>
</html>
