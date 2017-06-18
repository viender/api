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
    public function transform(Topic $topic)
    {
        return [
            'id'            => $topic->id,
            'type'          => 'topic',
            'parent_id'     => $topic->parent_id,
            'name'          => $topic->name,
            'description'   => $topic->description,
            'followed'      => $topic->followed,
            'slug'          => $topic->slug,
            'links'         => [
                [
                    'rel'   => 'self',
                    'url'   => route('api.viender.topic.topics.show', $topic),
                ],
                [
                    'rel'   => 'self_html',
                    'url'   => route('web.viender.topic.pages.topic.show', $topic),
                ],
                [
                    'rel'   => 'follow',
                    'url'   => route('api.viender.topic.users.topics.store', \Auth::user() ? \Auth::user() : ''),
                ],
                [
                    'rel'   => 'thumbnail',
                    'url'   => \Storage::url($topic->thumbnail),
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
