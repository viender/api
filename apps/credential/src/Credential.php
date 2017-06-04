<?php

namespace Viender\Credential;

use Viender\Topic\Topic as TopicService;
use Viender\Topic\Models\Topic;
use Illuminate\Support\Facades\Route;
use Viender\Credential\Models\Credential as CredentialModel;

class Credential
{

	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Credential\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        });
	}

    public function addEmploymentCredential($user, $input)
    {
        if (!isset($input['position'])) abort(400);
        if (!isset($input['company_or_organization'])) abort(400);
        if (!isset($input['start_year'])) abort(400);

        $credential = new CredentialModel();
        $credential->type = 'employment';

        $company = Topic::find((int) $input['company_or_organization']);
        if (!$company) $company = TopicService::create($input['company_or_organization'], null, 2);

        $credential->property = [
            'position'                  => $input['position'],
            'company_or_organization'   => $company->id,
            'start_year'                => $input['start_year'],
            'end_year'                  => $input['still_here'] ? null : $input['end_year'],
            'still_here'                => $input['still_here'] ?? ($input['end_year'] ? false : true),
        ];

        $user->credentials()->save($credential);
    }

    public function addEducationCredential($user, $input)
    {
        if (!isset($input['school'])) abort(400);
        if (!isset($input['concentration'])) abort(400);
        if (!isset($input['degree_type'])) abort(400);

        $credential = new CredentialModel();
        $credential->type = 'education';

        $school = Topic::find((int) $input['school']);
        if (!$school) $school = TopicService::create($input['school'], null, 3);

        $concentration = Topic::find((int) $input['concentration']);
        if (!$concentration) $concentration = TopicService::create($input['concentration'], null, 4);

        $secondaryConcentration = Topic::find((int) $input['secondary_concentration']);
        if (!$secondaryConcentration) $secondaryConcentration = TopicService::create($input['secondary_concentration'], null, 5);

        $credential->property = [
            'school'                    => $school->id,
            'concentration'             => $concentration->id,
            'secondary_concentration'   => $secondaryConcentration->id,
            'degree_type'               => $input['degree_type'],
            'graduation_year'           => $input['graduation_year'] ?? null,
        ];

        $user->credentials()->save($credential);
    }

    public function addLocationCredential($user, $input)
    {
        if (!isset($input['location'])) abort(400);
        if (!isset($input['start_year'])) abort(400);

        $credential = new CredentialModel();
        $credential->type = 'location';

        $school = Topic::find((int) $input['location']);
        if (!$school) $school = TopicService::create($input['location'], null, 1);

        $credential->property = [
            'location'      => $input['location'],
            'start_year'    => $input['start_year'],
            'end_year'      => $input['still_here'] ? null : $input['end_year'],
            'still_here'    => $input['still_here'] ?? ($input['end_year'] ? false : true),
        ];

        $user->credentials()->save($credential);
    }

    public function addTopicCredential($user, $input)
    {
        if (!isset($input['topic'])) abort(400);
        if (!isset($input['experience'])) abort(400);

        $credential = new CredentialModel();
        $credential->type = 'topic';

        $credential->property = [
            'topic'      => $input['topic'],
            'experience' => $input['experience'],
        ];

        $user->credentials()->save($credential);
    }
}
