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
        $paginator = Credential::latest('created_at')->paginate();
        return $this->respondWithPagination($paginator, new CredentialTransformer);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $credential = null;

        switch ($request->credential['type']) {
            case 'employment':
                $credential = $this->credentials->addEmploymentCredential($user, $request->credential);
                break;

            case 'education':
                $credential = $this->credentials->addEducationCredential($user, $request->credential);
                break;

            case 'location':
                $credential = $this->credentials->addLocationCredential($user, $request->credential);
                break;

            case 'topic':
                $credential = $this->credentials->addTopicCredential($user, $request->credential);
                break;

            default:
                break;
        }

        return $this->respond(new Item($credential, new CredentialTransformer));
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
