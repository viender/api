<?php

namespace Viender\Credential\Transformers;

use Viender\Topic\Models\Topic;
use Illuminate\Support\Facades\Storage;
use Viender\Credential\Models\Credential;

class CredentialTransformer extends Transformer
{
    /**
     * Turn this item object into a generic array
     *
     * @return array
     */
    public function transform(Credential $credential)
    {
        $data = [];

        switch ($credential->type) {
            case 'employment':
                $companyOrOrganization = Topic::find($credential->property['company_or_organization']);
                $data['company_or_organization'] = $this->transformPropertyObject($companyOrOrganization);
                break;

            case 'education':
                $school = Topic::find($credential->property['school']);
                $concentration = Topic::find($credential->property['concentration']);
                $secondaryConcentration = Topic::find($credential->property['secondary_concentration']);
                $data['school'] = $this->transformPropertyObject($school);
                $data['concentration'] = $this->transformPropertyObject($concentration);
                $data['secondary_concentration'] = $this->transformPropertyObject($secondaryConcentration);
                break;

            case 'location':
                $location = Topic::find($credential->property['location']);
                $data['location'] = $this->transformPropertyObject($location);
                break;

            case 'topic':
                $topic = Topic::find($credential->property['topic']);
                $data['topic'] = $this->transformPropertyObject($topic);
                break;

            default:
                break;
        }

        return [
            'id'        => $credential->id,
            'type'      => $credential->type,
            'property'  => $credential->property,
            'data'      => $data,
        ];
    }

    public function transformPropertyObject($object)
    {
        return [
            'name' => $object->name,
            'description' => $object->description,
            'links' => [
                [
                    'rel' => 'self_html',
                    'url' => route('web.viender.topic.pages.topic.show', $object),
                ],
                [
                    'rel' => 'avatar',
                    'url' => Storage::url($object->thumbnail),
                ],
                [
                    'rel' => 'avatar_medium',
                    'url' => Storage::url($object->thumbnail_medium),
                ],
                [
                    'rel' => 'avatar_large',
                    'url' => Storage::url($object->thumbnail_large),
                ],
            ],
        ];
    }
}
