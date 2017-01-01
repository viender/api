<?php

namespace App\Events;

use App\Upvote;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class UpvotableUpvoted
{
    use InteractsWithSockets, SerializesModels;

    public $upvote;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Upvote $upvote)
    {
        $this->upvote = $upvote;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
