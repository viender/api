<?php

namespace App\Ideapool\Repositories;

use App\User;
use App\Ideapool\Question;
use App\Ideapool\Viender\Utilities\Text;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;

class QuestionsRepository extends Repository
{
    public function model()
    {
        return 'App\Ideapool\Question';
    }

    /**
     * Create answer writen by Authenticated user
     * 
     * @param  int     $user_id    
     * @param  array      $data       
     * @return App\Question
     */
    public function createByUser(User $user, array $data)
    {
        $slug = Text::clean($data['title']);

        if(Question::where('slug', $slug)->exists()) {
            throw new ConflictHttpException;
        }

        $question = new Question($data);

        $question->slug = Text::clean($data['title']);

        return $user->questions()->save($question);
    }
}