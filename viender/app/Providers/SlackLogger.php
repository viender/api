<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class SlackLogger extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $logger = \Log::getMonolog();

        // Additional info in message
        $logger->pushProcessor(function($record) {
            $info = '';
            if (\Auth::check()) {
                $info .= 'User #' . \Auth::user()->id . ' (' . \Auth::user()->email . ') - ';
            }
            if (isset($_SERVER['REMOTE_ADDR'])) {
                $info .= 'IP: ' . $_SERVER['REMOTE_ADDR'];
            }
            if (isset($_SERVER['REQUEST_URI'])) {
                $info .= "\n" . $_SERVER['REQUEST_METHOD'] . " " . url($_SERVER['REQUEST_URI']);
            }
            if (isset($_SERVER['HTTP_REFERER'])) {
                $info .= "\nReferer: " . $_SERVER['HTTP_REFERER'];
            }
            if ($info) {
                $info = "\n---\n$info\n---";
                if (strpos($record['message'], "\n")) {
                    $record['message'] = 'Perhatian perhatian, ada error nih.' . "\n" . "\n" . preg_replace("/\n/", $info . "\n", $record['message'], 1);
                } else {
                    $record['message'] .= 'Perhatian perhatian, ada error nih.' . "\n" . "\n" . $info . "\n";
                }
            }
            return $record;
        });

        // Slack notification
        if (app()->environment(config('slacklogger.slack.env'))) {
            $slackHandler = new \Monolog\Handler\SlackHandler(
                config('slacklogger.slack.token'),
                config('slacklogger.slack.channel'),
                config('slacklogger.slack.username'),
                true,
                null,
                \Monolog\Logger::ERROR,
                true,
                true,
                true
            );
            $logger->pushHandler($slackHandler);
        }

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
