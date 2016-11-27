<?php

namespace App\Repositories;

use App\Answer;
use App\Contracts\Post\Answerable;

class AnswersRepository extends Repository
{
    public function model()
    {
        return 'App\Answer';
    }

    /**
     * Create answer writen by Authenticated user
     * 
     * @param  int     $user_id    
     * @param  Answerable $answerable 
     * @param  array      $data       
     * @return App\Answer
     */
    public function createByUser($user_id, Answerable $answerable, array $data) 
    {
        $data['user_id'] = $user_id;
        $data['title'] = '';

        return $answerable->answers()->save(new Answer($data));
    }
}