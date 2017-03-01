<?php

namespace Viender\Socialite\Repositories;

use Viender\Socialite\Models\Comment;
use Viender\Socialite\Contracts\Post\Commentable;

class CommentsRepository extends Repository
{
    public function model()
    {
        return 'Viender\Socialite\Models\Comment';
    }

    public function createByUser($user_id, Commentable $commentable, array $data) 
    {
        $data['user_id'] = $user_id;

        return $commentable->comments()->save(new Comment($data));
    }

    public function getCommentableUrl(Comment $comment) 
    {
        $url = '';

        if($comment->commentable_type == 'Viender\Socialite\Models\Question') {
            $url = url('/questions' . '/' . $comment->commentable->slug);
        }

        if($comment->commentable_type == 'Viender\Socialite\Models\Answer') {
            $url = url('/answers' . '/' . $comment->commentable->id);
        }

        return $url;
    }

    public function getCommentableType(Comment $comment) 
    {
        return (new \ReflectionClass($comment->commentable))->getShortName();
    }
}