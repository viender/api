<?php

use Illuminate\Http\Request;

Route::group(['namespace' => 'Api\Version1'], function() {

    // Models
    Route::resource('users', 'UsersController', ['except' => ['create', 'edit']]);
    Route::resource('stars', 'StarsController', ['except' => ['create', 'edit']]);
    Route::resource('addresses', 'AddressesController', ['except' => ['create', 'edit']]);
    Route::resource('countries', 'CountriesController', ['except' => ['create', 'edit']]);
    Route::resource('states', 'StatesController', ['except' => ['create', 'edit']]);
    Route::resource('cities', 'CitiesController', ['except' => ['create', 'edit']]);
    Route::resource('zipcodes', 'ZipCodesController', ['except' => ['create', 'edit']]);
    Route::resource('answers', 'AnswersController', ['except' => ['create', 'edit']]);
    Route::resource('questions', 'QuestionsController', ['except' => ['create', 'edit']]);
    Route::resource('auctions', 'AuctionsController', ['except' => ['create', 'edit']]);
    Route::resource('bids', 'BidsController', ['except' => ['create', 'edit']]);
    Route::resource('comments', 'CommentsController', ['except' => ['create', 'edit']]);
    Route::resource('tags', 'TagsController', ['except' => ['create', 'edit']]);
    Route::resource('upvotes', 'UpvotesController', ['except' => ['create', 'edit']]);
    Route::resource('downvotes', 'DownvotesController', ['except' => ['create', 'edit']]);


    // Relationships
    // Relationships - Ask
    Route::resource('users.questions', 'UserQuestionsController', ['except' => ['create', 'edit']]);
    Route::resource('users.answers', 'UserAnswersController', ['except' => ['create', 'edit']]);
    Route::resource('questions.answers', 'QuestionAnswersController', ['except' => ['create', 'edit']]);


    // Relationships - Tag
    Route::resource('users.tags', 'UserTagsController', ['except' => ['create', 'edit']]);
    Route::resource('questions.tags', 'QuestionTagsController', ['except' => ['create', 'edit']]);
    Route::resource('auctions.tags', 'AuctionTagsController', ['except' => ['create', 'edit']]);
    
    Route::resource('tags.users', 'TagUsersController', ['except' => ['create', 'edit']]);
    Route::resource('tags.questions', 'TagQuestionsController', ['except' => ['create', 'edit']]);
    Route::resource('tags.auctions', 'TagAuctionsController', ['except' => ['create', 'edit']]);


    // Relationships - Comment
    Route::resource('users.comments', 'UserCommentsController', ['except' => ['create', 'edit']]);
    Route::resource('questions.comments', 'QuestionCommentsController', ['except' => ['create', 'edit']]);
    Route::resource('answers.comments', 'AnswerCommentsController', ['except' => ['create', 'edit']]);
    Route::resource('comments/{commentable}/comments', 'CommentCommentsController', ['except' => ['create', 'edit']]);


    // Relationships - Vote
    Route::resource('users.upvotes', 'UserUpvotesController', ['except' => ['create', 'edit']]);
    Route::resource('questions.upvotes', 'QuestionUpvotesController', ['except' => ['create', 'edit']]);
    Route::resource('answers.upvotes', 'AnswerUpvotesController', ['except' => ['create', 'edit']]);
    Route::resource('comments.upvotes', 'CommentUpvotesController', ['except' => ['create', 'edit']]);

    Route::resource('users.downvotes', 'UserDownvotesController', ['except' => ['create', 'edit']]);
    Route::resource('questions.downvotes', 'QuestionDownvotesController', ['except' => ['create', 'edit']]);
    Route::resource('answers.downvotes', 'AnswerDownvotesController', ['except' => ['create', 'edit']]);
    Route::resource('comments.downvotes', 'CommentDownvotesController', ['except' => ['create', 'edit']]);


    // Relationships - Tutor seeker
    Route::resource('users.auctions', 'UserAuctionsController', ['except' => ['create', 'edit']]);
    Route::resource('users.bids', 'UserBidsController', ['except' => ['create', 'edit']]);
    Route::resource('auctions.bids', 'AuctionBidsController', ['except' => ['create', 'edit']]);


    // Relationships - Tutor rating
    Route::resource('users.stars', 'UserStarsController', ['except' => ['create', 'edit']]);


    // Relationships - User address
    Route::resource('users.addresses', 'UserAddressesController', ['except' => ['create', 'edit']]);
    Route::resource('countries.addresses', 'CountryAddressesController', ['except' => ['create', 'edit']]);
    Route::resource('countries.states', 'CountryStatesController', ['except' => ['create', 'edit']]);
    Route::resource('states.addresses', 'StateAddressesController', ['except' => ['create', 'edit']]);
    Route::resource('states.cities', 'StateCitiesController', ['except' => ['create', 'edit']]);
    Route::resource('cities.addresses', 'CityAddressesController', ['except' => ['create', 'edit']]);
    Route::resource('cities.zipcodes', 'CityZipCodesController', ['except' => ['create', 'edit']]);
    Route::resource('zipcodes.addresses', 'ZipCodeAddressesController', ['except' => ['create', 'edit']]);
});