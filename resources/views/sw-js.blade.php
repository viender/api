@php
    $isDesktop = \Agent::isDesktop();
	$mixManifestFile = file_get_contents(public_path('mix-manifest.json'));
	$mixManifest = json_decode($mixManifestFile, true);
@endphp

importScripts('/js/vendor/sw-toolbox/sw-toolbox.js');

@if(config('app.env') == 'local')
toolbox.options.debug = true;
@endif

toolbox.precache([
	'{{ $mixManifest['/js/core.js'] }}',
	'{{ $isDesktop ? $mixManifest['/css/core.css'] : $mixManifest['/css/core-mobile.css'] }}'
]);
{{-- toolbox.router.get('/css*', toolbox.cacheFirst);
toolbox.router.get('/js*', toolbox.cacheFirst);
toolbox.router.get('/fonts*', toolbox.cacheFirst);
toolbox.router.get('/img*', toolbox.cacheFirst); --}}
toolbox.router.get('/(.*)', toolbox.fastest, {
	origin: '{{ config('app.api_url') }}'
});

toolbox.router.default = toolbox.cacheFirst;
