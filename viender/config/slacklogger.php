<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Slack notification
    |--------------------------------------------------------------------------
    |
    | Whenever you `Log::error('some error');`, that error's message will be
    | sent to the Slack channel you have setup. Please note this "bubbles up"
    | which means it will be sent to the Slack channel for any logging done
    | error and up, error, critical, alert, and emergency. You can disable it
    | by passing an empty array to `env` property
    |
    */
    'slack' => [
        /**
         * Your slack token.
         *
         * Go to the authorization page (https://api.slack.com/web#auth) and
         * generate a new token
         */
        'token' => env('SLACK_ACCESS_TOKEN', 'null'),

        /**
         * Slack channel (encoded ID or name)
         *
         * Send the message to an existing '#channel' or 'private-group'
         */
        'channel' => env('SLACK_CHANNEL', 'null'),

        /**
         * The name of the bot
         */
        'username' => env('SLACK_ERROR_BOT_USERNAME', 'null'),

        /**
         * Slack notification triggers on this environment
         *
         * String or array. Empty array means disabled.
         */
        'env' => 'local'
    ]
];
