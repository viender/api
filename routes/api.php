<?php

use Illuminate\Http\Request;

Route::group(['namespace' => 'Api\Version1', 'middleware' => 'auth:api'], function() {

    // Models
    Route::resource('users', 'UserController');
    Route::resource('stars', 'StarController');
    Route::resource('addresses', 'AddressController');
    Route::resource('countries', 'CountryController');
    Route::resource('states', 'StateController');
    Route::resource('cities', 'CityController');
    Route::resource('streets', 'StreetController');
    Route::resource('answers', 'AnswerController');
    Route::resource('questions', 'QuestionController');
    Route::resource('auctions', 'AuctionController');
    Route::resource('bids', 'BidController');
    Route::resource('comments', 'CommentController');
    Route::resource('tags', 'TagController');
    Route::resource('upvotes', 'UpvoteController');
    Route::resource('downvotes', 'DownvoteController');


    // Relationships
    // Relationships - Ask
    Route::resource('users/{user}/questions', 'QuestionController');
    Route::resource('users/{user}/answers', 'AnswerController');
    Route::resource('questions/{question}/answers', 'AnswerController');


    // Relationships - Tag
    Route::resource('users/{user}/tags', 'TagController');
    Route::resource('questions/{question}/tags', 'TagController');
    Route::resource('auctions/{auction}/tags', 'TagController');
    Route::resource('tags/{tag}/users', 'UserController');
    Route::resource('tags/{tag}/questions', 'QuestionController');
    Route::resource('tags/{tag}/auctions', 'AuctionController');


    // Relationships - Comment
    Route::resource('users/{user}/comments', 'CommentController');
    Route::resource('questions/{question}/comments', 'CommentController');
    Route::resource('answers/{answer}/comments', 'CommentController');
    Route::resource('comments/{comment_id}/comments', 'CommentController');


    // Relationships - Vote
    Route::resource('users/{user}/upvotes', 'UpvoteController');
    Route::resource('questions/{question}/upvotes', 'UpvoteController');
    Route::resource('answers/{answer}/upvotes', 'UpvoteController');
    Route::resource('comments/{comment}/upvotes', 'UpvoteController');

    Route::resource('users/{user}/downvotes', 'DownvoteController');
    Route::resource('questions/{question}/downvotes', 'DownvoteController');
    Route::resource('answers/{answer}/downvotes', 'DownvoteController');
    Route::resource('comments/{comment}/downvotes', 'DownvoteController');


    // Relationships - Tutor seeker
    Route::resource('users/{user}/auctions', 'AuctionController');
    Route::resource('users/{user}/bids', 'BidController');
    Route::resource('auctions/{auction}/bids', 'BidController');


    // Relationships - Tutor rating
    Route::resource('users/{user}/stars', 'StarController');


    // Relationships - User address
    Route::resource('users/{user}/addresses', 'AddressController');
    Route::resource('countries/{country}/addresses', 'AddressController');
    Route::resource('countries/{country}/states', 'StateController');
    Route::resource('states/{state}/addresses', 'AddressController');
    Route::resource('states/{state}/cities', 'CityController');
    Route::resource('cities/{city}/addresses', 'AddressController');
    Route::resource('cities/{city}/streets', 'StreetController');
    Route::resource('streets/{street}/addresses', 'AddressController');
});