<?php

namespace Viender\Credential;

use Viender\Topic\Models\Topic;
use Illuminate\Support\Facades\Route;
use Viender\Topic\Topic as TopicService;
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
        if (!isset($input['still_here']) && !isset($input['end_year'])) abort(400);

        $topicService = new TopicService;

        $credential = new CredentialModel();
        $credential->type = 'employment';

        $company = Topic::find((int) $input['company_or_organization']);
        if (!$company) Topic::where('name', $input['company_or_organization'])->first();
        if (!$company) $company = $topicService->create($input['company_or_organization'], null, 2);

        $stillHere = (boolean) $input['still_here'];
        if (!$stillHere && !isset($input['end_year'])) {
            $stillHere = true;
        } else if (isset($input['end_year'])) {
            $stillHere = false;
        }

        $credential->property = [
            'position'                  => $input['position'],
            'company_or_organization'   => $company->id,
            'start_year'                => (int) $input['start_year'],
            'end_year'                  => isset($input['still_here']) ? null : $input['end_year'],
            'still_here'                => $stillHere,
        ];

        $user->credentials()->save($credential);
    }

    public function addEducationCredential($user, $input)
    {
        if (!isset($input['school'])) abort(400);
        if (!isset($input['concentration'])) abort(400);
        if (!isset($input['degree_type'])) abort(400);

        $topicService = new TopicService;

        $credential = new CredentialModel();
        $credential->type = 'education';

        $school = Topic::find((int) $input['school']);
        if (!$school) Topic::where('name', $input['school'])->first();
        if (!$school) $school = $topicService->create($input['school'], null, 3);

        $concentration = Topic::find((int) $input['concentration']);
        if (!$concentration) $concentration = $topicService->create($input['concentration'], null, 4);

        $secondaryConcentration = null;
        if (isset($input['secondary_concentration'])) {
            $secondaryConcentration = Topic::find((int) $input['secondary_concentration']);
            if (!$secondaryConcentration) $secondaryConcentration = $topicService->create($input['secondary_concentration'], null, 4);
        }

        $credential->property = [
            'school'                    => $school->id,
            'concentration'             => $concentration->id,
            'secondary_concentration'   => $secondaryConcentration ? $secondaryConcentration->id : null,
            'degree_type'               => $input['degree_type'],
            'graduation_year'           => $input['graduation_year'] ?? null,
        ];

        $user->credentials()->save($credential);
    }

    public function addLocationCredential($user, $input)
    {
        if (!isset($input['location'])) abort(400);
        if (!isset($input['start_year'])) abort(400);
        if (!isset($input['still_here']) && !isset($input['end_year'])) abort(400);

        $topicService = new TopicService;

        $credential = new CredentialModel();
        $credential->type = 'location';

        $location = Topic::find((int) $input['location']);
        if (!$location) Topic::where('name', $input['location'])->first();
        if (!$location) $location = $topicService->create($input['location'], null, 1);

        $stillHere = (boolean) $input['still_here'];
        if (!$stillHere && !isset($input['end_year'])) {
            $stillHere = true;
        } else if (isset($input['end_year'])) {
            $stillHere = false;
        }

        $credential->property = [
            'location'      => $location->id,
            'start_year'    => $input['start_year'],
            'end_year'      => isset($input['still_here']) ? null : $input['end_year'],
            'still_here'    => $stillHere,
        ];

        $user->credentials()->save($credential);
    }

    public function addTopicCredential($user, $input)
    {
        if (!isset($input['topic'])) abort(400);
        if (!isset($input['experience'])) abort(400);

        $topicService = new TopicService;

        $credential = new CredentialModel();
        $credential->type = 'topic';

        $topic = Topic::find((int) $input['topic']);
        if (!$topic) Topic::where('name', $input['topic'])->first();
        if (!$topic) $topic = $topicService->create($input['topic'], null, 1);

        $credential->property = [
            'topic'      => $topic->id,
            'experience' => $input['experience'],
        ];

        $user->credentials()->save($credential);
    }
}
