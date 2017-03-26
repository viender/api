<?php

namespace Viender\Follow\Repositories;

use App\User;

class FollowingsRepository extends Repository
{
    public function model()
    {
        return 'Viender\Follow\Models\Following';
    }
}
