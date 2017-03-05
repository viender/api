<?php

namespace Viender\Profile\Transformers;

use Illuminate\Notifications\DatabaseNotification;

class DatabaseNotificationTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(DatabaseNotification $databaseNotification)
    {
        return [
            'id'      => $databaseNotification->id,
            'type'    => $databaseNotification->type,
            'read_at' => $databaseNotification->read_at,
            'data'    => $databaseNotification->data
        ];
    }
}