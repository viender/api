<?php

namespace Viender\Userdata\Http\Controllers\Api\Version1;

use App\User;
use League\Fractal\Manager;
use Illuminate\Http\Request;
use Viender\Userdata\Transformers\Version1\UserTransformer;
use Viender\Utilities\Controllers\Handlers\BasicHandler;
use Viender\Userdata\Transformers\Version1\Serializer\ArraySerializer;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class UsersController extends ApiController
{
    public function __construct()
    {
        $this->fractal  = new Manager();
        $this->fractal->setSerializer(new ArraySerializer());
        if (isset($_GET['with'])) {
            $this->fractal->parseIncludes($_GET['with']);
        }
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
        // Reject further access if the client_id is not valid
        if( ! \DB::table('oauth_clients')->where([['id', $request->client_id], ['secret', $request->client_secret]])->exists()) {
            throw new AccessDeniedHttpException;
        }

        $user = null;
        $passwordTemp;

        // If the request is from social account, find or create user based on
        // user data provided in the request.
        if($request->is_social_account) {
            // Update social account and password if social account already exist.
            if(\App\SocialAccount::where([
                ['provider', $request->provider],
                ['social_id', $request->social_id]
            ])->exists()) {
                $socialAccount = \App\SocialAccount::where([
                    ['provider', $request->provider],
                    ['social_id', $request->social_id]
                ])->first();

                $socialAccount->update($request->all());

                $user = $socialAccount->user;

                $passwordTemp = $user->password;

                $user->password = bcrypt($request->password);

                $user->save();

            // Create new social account and user if social account is not exist.
            } else {
                $user = \App\User::create($request->all());

                $passwordTemp = $user->password;

                $user->password = bcrypt($request->password);

                $user->save();

                $socialAccount = $user->socialAccounts()->save(new \App\SocialAccount($request->all()));
            }

        // If the request is not from social account then simply create new user
        } else {
            $user = \App\User::create($request->all());
        }

        $http = new \GuzzleHttp\Client(['base_uri' => config('app.url')]);

        if(config('app.env') == 'local') {
            $http = new \GuzzleHttp\Client(['base_uri' => config('app.url'), 'verify' => false]);
        }

        $response = $http->post(config('app.url') . '/oauth/token', [
            'headers' => [
                'Origin'            => $request->header('Origin'),
                'Content-Type'      => 'application/json',
                'Accept'            => 'application/json'
            ],
            'json' => [
                'grant_type'        => 'password',
                'client_id'         => $request->client_id,
                'client_secret'     => $request->client_secret,
                'username'          => $request->email,
                'password'          => $request->password,
                'scope'             => '',
            ],
        ]);

        $user->password = $passwordTemp;

        $user->save();

        // Add social account field to user.
        $user->social_accounts = $user->socialAccounts;

        $token = json_decode((string) $response->getBody(), true);
        
        return response(array_merge($user->toArray(), $token));
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