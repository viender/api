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

    public function toggleUpvote(Answer $answer, $user_id = 0) 
    {
        if(! $user_id) {
            $user_id = \Auth::user()->id;
        }

        if($answer->downvotes()->where('user_id', $user_id)->exists()) {
            $downvote = $answer->downvotes()->where('user_id', $user_id)->first();
            $downvote->delete();
        }

        if($answer->upvotes()->where('user_id', $user_id)->exists()) {
            $upvote = $answer->upvotes()->where('user_id', $user_id)->delete();
            return null;
        }

        $upvote = new Upvote(['user_id' => $user_id]);

        $answer->upvotes()->save($upvote);

        return $upvote;
    }

    public function toggleDownvote(Answer $answer, $user_id = 0) 
    {
        if(! $user_id) {
            $user_id = \Auth::user()->id;
        }

        if($answer->upvotes()->where('user_id', $user_id)->exists()) {
            $upvote = $answer->upvotes()->where('user_id', $user_id)->first();
            $upvote->delete();
        }

        if($answer->downvotes()->where('user_id', $user_id)->exists()) {
            $downvote = $answer->downvotes()->where('user_id', $user_id)->delete();
            return null;
        }

        $downvote = new Downvote(['user_id' => $user_id]);

        $answer->downvotes()->save($downvote);

        return $downvote;
    }
}