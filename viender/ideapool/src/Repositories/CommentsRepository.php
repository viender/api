<?php

namespace Viender\Ideapool\Repositories;

use Viender\Ideapool\Comment;
use Viender\Ideapool\Contracts\Post\Commentable;

class CommentsRepository extends Repository
{
    public function model()
    {
        return 'Viender\Ideapool\Comment';
    }

    public function createByUser($user_id, Commentable $commentable, array $data) 
    {
        $data['user_id'] = $user_id;

        return $commentable->comments()->save(new Comment($data));
    }

    public function getCommentableUrl(Comment $comment) 
    {
        $url = '';

        if($comment->commentable_type == 'Viender\Ideapool\Question') {
            $url = url('/questions' . '/' . $comment->commentable->slug);
        }

        if($comment->commentable_type == 'Viender\Ideapool\Answer') {
            $url = url('/answers' . '/' . $comment->commentable->id);
        }

        return $url;
    }

    public function getCommentableType(Comment $comment) 
    {
        return (new \ReflectionClass($comment->commentable))->getShortName();
    }
}