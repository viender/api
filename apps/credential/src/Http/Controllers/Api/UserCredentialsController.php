<?php

namespace Viender\Credential\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use League\Fractal\Resource\Item;
use Viender\Credential\Models\Credential;
use Viender\Credential\Credential as CredentialService;
use Viender\Credential\Transformers\CredentialTransformer;

class UserCredentialsController extends ApiController
{
    protected $credentials;

    public function __construct(CredentialService $credentials) {
        parent::__construct();
        $this->credentials = $credentials;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $paginator = Credential::paginate();
        return $this->respondWithPagination($paginator, new CredentialTransformer);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {


    }

    /**
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, Credential $credential)
    {

    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, Credential $credential)
    {

    }

    /**
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, Credential $credential)
    {

    }
}
