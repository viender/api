@php
    $isDesktop = \Agent::isDesktop();
    $mixManifestFile = file_get_contents(public_path('mix-manifest.json'));
    $mixManifest = json_decode($mixManifestFile, true);
@endphp

importScripts('/js/vendor/sw-toolbox/sw-toolbox.js');

@if(config('app.env') == 'local')
toolbox.options.debug = true;
@endif

toolbox.options.cache.name = 'viender_v0.1.7';

toolbox.precache([
    '{{ $mixManifest['/js/core.js'] }}',
    '{{ $isDesktop ? $mixManifest['/css/core.css'] : $mixManifest['/css/core-mobile.css'] }}',
{{-- @foreach($mixManifest as $asset)
    '{{ $asset }}',
@endforeach --}}
]);

{{-- toolbox.router.get('/css*', toolbox.cacheFirst);
toolbox.router.get('/js*', toolbox.cacheFirst);
toolbox.router.get('/fonts*', toolbox.cacheFirst);
toolbox.router.get('/img*', toolbox.cacheFirst); --}}

toolbox.router.get('/login', toolbox.networkFirst);

toolbox.router.get('/api/notifications(.*)', toolbox.networkFirst);

toolbox.router.get('/profile/(.*)', toolbox.networkFirst);

toolbox.router.get('/user', toolbox.networkFirst, {
    origin: '{{ config('viender.api_url') }}',
    credentials: 'include',
});

toolbox.router.get('/(.*)', toolbox.networkFirst, {
    origin: '{{ config('viender.api_url') }}',
    credentials: 'include',
});

toolbox.router.default = toolbox.cacheFirst;
