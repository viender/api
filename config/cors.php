<?php

return [
    /*
     |--------------------------------------------------------------------------
     | Laravel CORS
     |--------------------------------------------------------------------------
     |

     | allowedOrigins, allowedHeaders and allowedMethods can be set to array('*')
     | to accept any value.
     |
     */
    'supportsCredentials' => true,
    'allowedOrigins' => ['http://web.viender.dev', 'https://web.viender.dev', 'https://viender.com', 'https://www.viender.com', 'https://dev.viender.com'],
    'allowedHeaders' => ['content-type', 'Authorization', 'X-XSRF-TOKEN', 'X-CSRF-Token'],
    'allowedMethods' => ['GET', 'POST', 'PUT',  'DELETE'],
    'exposedHeaders' => [],
    'maxAge' => 0,
    'hosts' => [],
];

