<?php

namespace App\Viender\Transformers\Version1\Traits;

use App\Viender\Transformers\UserTransformer;

trait AuthorIncludable
{
    /**
     * Include Author
     *
     * @return League\Fractal\ItemResource
     */
    public function includeAuthor($item)
    {
        $author = $item->user;

        return $this->item($author, new UserTransformer);
    }
}