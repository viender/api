<?php

namespace App\Http\Controllers\Api\Version1;

use App\User;
use Illuminate\Http\Request;
use App\Viender\Transformers\Version1\UserTransformer;
use App\Http\Controllers\Api\Version1\Handlers\BasicHandler;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class UsersController extends ApiController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api')->except('index', 'show', 'store');
        $this->handler = new BasicHandler($this, User::class, UserTransformer::class);
    }

    /** 
     * @api {get} /users Get Users
     * @apiName UsersIndex
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse UserIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->handler->index();
    }

    /**
     * @api {post} /users Create User
     * @apiName UsersStore
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse UserRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if( ! \DB::table('oauth_clients')->where([['id', $request->client_id], ['secret', $request->client_secret]])->exists()) {
            throw new AccessDeniedHttpException;
        }

        if($this->isSocialAccountRequest($request)) {
            if(\App\SocialAccount::where([
                ['provider' => $request->provider],
                ['social_id' => $request->social_id]
            ])->exists()) {
                $socialAccount = $user->socialAccounts()->where([
                    ['provider' => $request->provider],
                    ['social_id' => $request->social_id]
                ])->first();

                $socialAccount->user->update($request->all()); // Is this necessary?

                $socialAccount->update($request->all());
            } else {
                $user = \App\User::create($request->all());
                $socialAccount = $user->socialAccounts()->save(new \App\SocialAccount($request->all()));
            }
        } else {
            $user = \App\User::create($request->all());
        }


        return 'berhasil';
    }

    /**
     * @api {get} /users/:username Get User
     * @apiName UsersShow
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse UserShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return $this->handler->show($user);
    }

    /**
     * @api {put} /users/:username Update User
     * @apiName UsersUpdate
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse UserRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        return $this->handler->update($request, $user);
    }

    /**
     * @api {delete} /users/:username Delete User
     * @apiName UsersDelete
     * @apiGroup UserGroup
     * @apiVersion 1.0.0
     * @apiDescription Delete an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        return $this->handler->destroy($user);
    }

    public function isSocialAccountRequest(Request $request) 
    {
        return (isset($request->social_id) && 
            isset($request->provider) && 
            isset($request->token) &&
            isset($request->expiresIn));
    }
}