<?php

namespace App\Ideapool\Repositories;

use App\Ideapool\Comment;
use App\Ideapool\Contracts\Post\Commentable;

class CommentsRepository extends Repository
{
    public function model()
    {
        return 'App\Ideapool\Comment';
    }

    public function createByUser($user_id, Commentable $commentable, array $data) 
    {
        $data['user_id'] = $user_id;

        return $commentable->comments()->save(new Comment($data));
    }

    public function getCommentableUrl(Comment $comment) 
    {
        $url = '';

        if($comment->commentable_type == 'App\Ideapool\Question') {
            $url = url('/questions' . '/' . $comment->commentable->slug);
        }

        if($comment->commentable_type == 'App\Ideapool\Answer') {
            $url = url('/answers' . '/' . $comment->commentable->id);
        }

        return $url;
    }

    public function getCommentableType(Comment $comment) 
    {
        return (new \ReflectionClass($comment->commentable))->getShortName();
    }
}