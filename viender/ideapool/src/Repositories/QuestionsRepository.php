<?php

namespace Viender\Ideapool\Repositories;

use App\User;
use Viender\Ideapool\Question;
use Viender\Ideapool\Utilities\Text;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;

class QuestionsRepository extends Repository
{
    public function model()
    {
        return 'Viender\Ideapool\Question';
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