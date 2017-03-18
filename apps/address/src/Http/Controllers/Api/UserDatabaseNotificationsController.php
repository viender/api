<?php

namespace Viender\Address\Http\Controllers\Api;

use App\User;
use Illuminate\Notifications\DatabaseNotification;
use Viender\Address\Transformers\DatabaseNotificationTransformer;

class UserDatabaseNotificationsController extends ApiController
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware('auth:api');
    }

    /** 
     * @api {get} /notifications Get notifications
     * @apiName notificationsIndex
     * @apiGroup NotificationGroup
     * @apiVersion 1.0.0
     * @apiDescription Get a page of Addresses
     *
     * @apiHeader {String} Content-Type Content-Type
     * 
     * @apiUse CityIndexSuccess
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        if($user->id != \Auth::user()->id) {
            return [];
        }

        $paginator = $user->notifications()->orderBy('created_at', 'desc')->paginate();

        return $this->respondWithPagination($paginator, new DatabaseNotificationTransformer());
    }

    /**
     * @api {post} /notifications Create DatabaseNotification
     * @apiName notificationsStore
     * @apiGroup NotificationGroup
     * @apiVersion 1.0.0
     * @apiDescription Create a new Addresses
     *
     * @apiUse AuthApiHeader
     * 
     * @apiUse CityRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        
    }

    /**
     * @api {get} /notifications/:id Get DatabaseNotification
     * @apiName notificationsShow
     * @apiGroup NotificationGroup
     * @apiVersion 1.0.0
     * @apiDescription Get an Addresses object
     *
     * @apiHeader {String} Content-Type Content-Type
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CityShowSuccess
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, DatabaseNotification $city)
    {

    }

    /**
     * @api {put} /notifications/:id Update DatabaseNotification
     * @apiName notificationsUpdate
     * @apiGroup NotificationGroup
     * @apiVersion 1.0.0
     * @apiDescription Update an Addresses
     *
     * @apiUse AuthApiHeader
     *
     * @apiParam (Path Parameters) {Number} id Addresses unique ID
     *
     * @apiUse CityRequestBodyParam
     *
     * @apiUse MessageResponseSuccess
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, DatabaseNotification $city)
    {
        
    }

    /**
     * @api {delete} /notifications/:id Delete DatabaseNotification
     * @apiName notificationsDelete
     * @apiGroup NotificationGroup
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
    public function destroy(User $user, DatabaseNotification $city)
    {
        
    }
}