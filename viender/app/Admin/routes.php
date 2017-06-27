<?php

use Illuminate\Routing\Router;

Admin::registerHelpersRoutes();

Route::group([
    'prefix'        => config('admin.prefix'),
    'namespace'     => Admin::controllerNamespace(),
    'middleware'    => ['web', 'admin'],
], function (Router $router) {

    $router->get('/', 'HomeController@index');
    $router->resource('auth/users', UsersController::class);
    $router->resource('socialite/questions', QuestionsController::class);
    $router->resource('socialite/answers', AnswersController::class);
});
