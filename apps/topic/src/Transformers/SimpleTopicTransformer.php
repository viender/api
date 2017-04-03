<?php

namespace Viender\Topic\Transformers;

use Viender\Topic\Models\Topic;

class SimpleTopicTransformer extends Transformer
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
            'parent_id'     => $topic->parent_id,
            'name'          => $topic->name,
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
