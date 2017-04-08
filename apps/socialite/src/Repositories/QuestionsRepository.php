<?php

namespace Viender\Socialite\Repositories;

use App\User;
use Viender\Utilities\Text;
use Viender\Topic\Models\Topic;
use Viender\Socialite\Models\Question;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;

class QuestionsRepository extends Repository
{
    public function model()
    {
        return 'Viender\Socialite\Models\Question';
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
        $data['slug'] = Text::clean($data['title']);

        if(Question::where('slug', $data['slug'])->exists()) {
            throw new ConflictHttpException;
        }

        $question = $user->questions()->save(new Question($data));

        foreach ($data['topics'] as $topicData) {
            $topic = Topic::where('id', $topicData['id'])->first();

            if ($topic) {
                $question->topics()->attach($topic);
            }
        }

        return $question;
    }
}
