<?php

namespace Viender\Topic\Transformers;

use Viender\Topic\Models\Topic;
use Viender\Follow\Models\Follow;

class FollowedTopicTransformer extends Transformer
{
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'parent',
    ];
    
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Follow $followedTopic)
    {
        $topic = $followedTopic->followee;

        return [
            'id'            => $topic->id,
            'name'          => $topic->name,
            'description'   => $topic->description,
            'followed'      => $topic->followed,
            'links'         => [
                [
                    'rel'   => 'self',
                    'url'   => route('api.viender.topic.topics.show', $topic),
                ],
                [
                    'rel'   => 'self_html',
                    'url'   => route('web.viender.topic.pages.topic.index', $topic),
                ],
                [
                    'rel'   => 'follow',
                    'url'   => route('api.viender.topic.users.topics.store', \Auth::user() ? \Auth::user() : ''),
                ],
                [
                    'rel'   => 'thumbnail',
                    'url'   => $topic->thumbnail,
                ],
            ],
        ];
    }

    /**
     * Include Parent
     *
     * @return League\Fractal\ItemResource
     */
    public function includeParent($topic)
    {
        $parent = $topic->parent;

        return $this->item($parent, new TopicTransformer);
    }   
}
