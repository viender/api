<?php

namespace Viender\Feed\Jobs;

use App\User;
use Viender\Feed\Client;
use Illuminate\Bus\Queueable;
use Viender\Topic\Models\Topic;
use Illuminate\Queue\SerializesModels;
use Viender\Socialite\Models\Question;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ProcessPodcast implements ShouldQueue
{
    use InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    protected $topic;

    /**
     * Create a new job instance.
     *
     * @param  Podcast  $podcas
     * @return void
     */
    public function __construct(User $user, Topic $topic)
    {
        $this->user = $user;
        $this->topic = $topic;
    }

    /**
     * Execute the job.
     *
     * @param  AudioProcessor  $processor
     * @return void
     */
    public function handle()
    {
        $client = new Client;
    }
}
