@php
	$mixManifestFile = file_get_contents(public_path('mix-manifest.json'));
	$mixManifest = json_decode($mixManifestFile, true);
@endphp

importScripts('/js/vendor/sw-toolbox/sw-toolbox.js');

toolbox.precache([
	'{{ $mixManifest['/js/core.js'] }}',
	'{{ \Agent::isDesktop() ? $mixManifest['/css/core.css'] : $mixManifest['/css/core-mobile.css'] }}'
]);

toolbox.router.get('/sw.js', toolbox.networkFirst);
toolbox.router.get('/css*', toolbox.cacheFirst);
toolbox.router.get('/js*', toolbox.cacheFirst);
toolbox.router.get('/fonts*', toolbox.cacheFirst);
toolbox.router.get('/img*', toolbox.cacheFirst);

toolbox.router.get('/(.*)', toolbox.networkFirst, {
	origin: '{{ config('app.api_url') }}'
});

toolbox.router.default = toolbox.networkFirst;
