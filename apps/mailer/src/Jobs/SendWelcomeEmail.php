<?php

namespace Viender\Mailer\Jobs;

use App\User;
use Illuminate\Bus\Queueable;
use Viender\Mailer\Mail\Welcome;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendWelcomeEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $receiver;

    /**
     * Create a new job instance.
     *
     * @param  Podcast  $receiver
     * @return void
     */
    public function __construct(User $receiver)
    {
        $this->receiver = $receiver;
    }

    /**
     * Execute the job.
     *
     * @param  AudioProcessor  $processor
     * @return void
     */
    public function handle()
    {
          Mail::to($this->receiver)->send(new Welcome);
    }
}
