<?php

return [
    'protocol'      => env('VIENDER_PROTOCOL', 'http'),

    'domain'        => env('VIENDER_DOMAIN', 'viender.dev'),

    'web_subdomain' => env('VIENDER_WEB_SUBDOMAIN', ''),

    'api_subdomain' => env('VIENDER_API_SUBDOMAIN', 'api'),

    'web_domain'    => env('VIENDER_WEB_SUBDOMAIN', '') . (env('VIENDER_WEB_SUBDOMAIN', '') !== '' ? '.' : '') . env('VIENDER_DOMAIN', 'viender.dev'),

    'api_domain'    => env('VIENDER_API_SUBDOMAIN', 'viender.dev') . (env('VIENDER_API_SUBDOMAIN', '') !== '' ? '.' : '') . env('VIENDER_DOMAIN', 'viender.dev'),

    'web_url'       => env('VIENDER_PROTOCOL', 'http') . '://' . env('VIENDER_WEB_SUBDOMAIN', '') . (env('VIENDER_WEB_SUBDOMAIN', '') !== '' ? '.' : '') . env('VIENDER_DOMAIN', 'viender.dev'),

    'api_url'       => env('VIENDER_PROTOCOL', 'http') . '://' . env('VIENDER_API_SUBDOMAIN', 'viender.dev') . (env('VIENDER_API_SUBDOMAIN', '') !== '' ? '.' : '') . env('VIENDER_DOMAIN', 'viender.dev'),
];
