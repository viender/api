<?php

namespace App\Repositories;

use App\Comment;
use App\Contracts\Post\Commentable;

class CommentsRepository extends Repository
{
    public function model()
    {
        return 'App\Comment';
    }

    public function createByUser($user_id, Commentable $commentable, array $data) 
    {
        $data['user_id'] = $user_id;

        return $commentable->comments()->save(new Comment($data));
    }

    public function getCommentableUrl(Comment $comment) 
    {
        $url = '';

        if($comment->commentable_type == 'App\Question') {
            $url = url('/questions' . '/' . $comment->commentable->slug);
        }

        if($comment->commentable_type == 'App\Answer') {
            $url = url('/answers' . '/' . $comment->commentable->id);
        }

        return $url;
    }

    public function getCommentableType(Comment $comment) 
    {
        return (new \ReflectionClass($comment->commentable))->getShortName();
    }
}