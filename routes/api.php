<?php

use Illuminate\Http\Request;

Route::group(['namespace' => 'Api\Version1', 'middleware' => 'auth:api'], function() {

    // Models
    Route::resource('users', 'UsersController');
    Route::resource('stars', 'StarsController');
    Route::resource('addresses', 'AddressesController');
    Route::resource('countries', 'CountriesController');
    Route::resource('states', 'StatesController');
    Route::resource('cities', 'CitiesController');
    Route::resource('streets', 'StreetsController');
    Route::resource('answers', 'AnswersController');
    Route::resource('questions', 'QuestionsController');
    Route::resource('auctions', 'AuctionsController');
    Route::resource('bids', 'BidsController');
    Route::resource('comments', 'CommentsController');
    Route::resource('tags', 'TagsController');
    Route::resource('upvotes', 'UpvotesController');
    Route::resource('downvotes', 'DownvotesController');


    // Relationships
    // Relationships - Ask
    Route::resource('users.questions', 'UserQuestionsController');
    Route::resource('users.answers', 'UserAnswersController');
    Route::resource('questions.answers', 'QuestionAnswersController');


    // Relationships - Tag
    Route::resource('users.tags', 'UserTagsController');
    Route::resource('questions.tags', 'QuestionTagsController');
    Route::resource('auctions.tags', 'AuctionTagsController');
    
    Route::resource('tags.users', 'TagUsersController');
    Route::resource('tags.questions', 'TagQuestionsController');
    Route::resource('tags.auctions', 'TagAuctionsController');


    // Relationships - Comment
    Route::resource('users.comments', 'UserCommentsController');
    Route::resource('questions.comments', 'QuestionCommentsController');
    Route::resource('answers.comments', 'AnswerCommentsController');
    Route::resource('comments/{id}/comments', 'CommentCommentsController');


    // Relationships - Vote
    Route::resource('users.upvotes', 'UserUpvotesController');
    Route::resource('questions.upvotes', 'QuestionUpvotesController');
    Route::resource('answers.upvotes', 'AnswerUpvotesController');
    Route::resource('comments.upvotes', 'CommentUpvotesController');

    Route::resource('users.downvotes', 'UserDownvotesController');
    Route::resource('questions.downvotes', 'QuestionDownvotesController');
    Route::resource('answers.downvotes', 'AnswerDownvotesController');
    Route::resource('comments.downvotes', 'CommentDownvotesController');


    // Relationships - Tutor seeker
    Route::resource('users.auctions', 'UserAuctionsController');
    Route::resource('users.bids', 'UserBidsController');
    Route::resource('auctions.bids', 'AuctionBidsController');


    // Relationships - Tutor rating
    Route::resource('users.stars', 'UserStarsController');


    // Relationships - User address
    Route::resource('users.addresses', 'UserAddressesController');
    Route::resource('countries.addresses', 'CountryAddressesController');
    Route::resource('countries.states', 'CountryStatesController');
    Route::resource('states.addresses', 'StateAddressesController');
    Route::resource('states.cities', 'StateCitiesController');
    Route::resource('cities.addresses', 'CityAddressesController');
    Route::resource('cities.streets', 'CityStreetsController');
    Route::resource('streets.addresses', 'StreetAddressesController');
});