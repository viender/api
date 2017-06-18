<?php

namespace Viender\Topic\Transformers;

use Viender\Topic\Models\Topic;
use Viender\Topic\Models\CategoryTopic;
use Viender\Topic\Transformers\TopicTransformer;

class CategoryTopicTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(CategoryTopic $categoryTopic)
    {
        $topic = Topic::find($categoryTopic->topic_id);
        $topicTransformer = new TopicTransformer;

        return $topicTransformer->transform($topic);
    }
}
