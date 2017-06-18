<?php

namespace Tests\Unit;

use Tests\TestCase;
use Viender\Topic\Models\Topic;
use Viender\Credential\Credential as CredentialService;
use Viender\Credential\Models\Credential;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CredentialTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @return void
     */
    public function it_will_treat_topic_name_as_lowercase_when_checking_duplicate()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addEmploymentCredential($user, [
            'position' => 'Frontend Developer',
            'company_or_organization' => 'Bukalapak',
            'start_year' => 2017,
            'end_year'   => 2018,
            'still_here' => true,
        ]);

        $credential->addEmploymentCredential($user, [
            'position' => 'Frontend Developer',
            'company_or_organization' => 'bukalapak',
            'start_year' => 2017,
            'end_year'   => 2018,
            'still_here' => true,
        ]);

        $credential->addLocationCredential($user, [
            'location' => 'Jakarta',
            'start_year' => 2017,
            'end_year' => 2018,
            'still_here' => true,
        ]);

        $credential->addLocationCredential($user, [
            'location' => 'jakarta',
            'start_year' => 2017,
            'end_year' => 2018,
            'still_here' => true,
        ]);

        $credential->addEducationCredential($user, [
            'school' => 'USU',
            'concentration' => 'Telecommunication',
            'secondary_concentration' => 'Electronic',
            'degree_type' => 'B.E.',
            'graduation_year' => null,
        ]);

        $credential->addEducationCredential($user, [
            'school' => 'USU',
            'concentration' => 'telecommunication',
            'secondary_concentration' => 'electronic',
            'degree_type' => 'B.E.',
            'graduation_year' => null,
        ]);

        $credential->addTopicCredential($user, [
            'topic' => 'Business',
            'experience' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, tenetur unde inventore blanditiis fugiat nobis! Ipsa perspiciatis fuga dolor tenetur ducimus vero maxime quis perferendis, adipisci, et maiores aut at?',
        ]);

        $credential->addTopicCredential($user, [
            'topic' => 'business',
            'experience' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, tenetur unde inventore blanditiis fugiat nobis! Ipsa perspiciatis fuga dolor tenetur ducimus vero maxime quis perferendis, adipisci, et maiores aut at?',
        ]);

        $this->assertTrue(true);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_employment_credential_with_start_year_and_end_year()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addEmploymentCredential($user, [
            'position' => 'Frontend Developer',
            'company_or_organization' => 'Bukalapak',
            'start_year' => 2017,
            'end_year'   => 2018,
            'still_here' => true,
        ]);

        if ($user->credentials()->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Bukalapak')->count() === 0) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['still_here'] != false) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['company_or_organization'] != Topic::where('name', 'bukalapak')->first()->id) $this->assertTrue(false);

        $this->assertTrue(true);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_employment_credential_with_no_end_year_and_still_here_is_true()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addEmploymentCredential($user, [
            'position' => 'Frontend Developer',
            'company_or_organization' => 'Bukalapak',
            'start_year' => 2017,
            'still_here' => true,
        ]);

        if ($user->credentials()->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Bukalapak')->count() === 0) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['still_here'] != true) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['company_or_organization'] != Topic::where('name', 'bukalapak')->first()->id) $this->assertTrue(false);

        $this->assertTrue(true);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_employment_credential_with_no_end_year_and_still_here_is_false()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addEmploymentCredential($user, [
            'position' => 'Frontend Developer',
            'company_or_organization' => 'Bukalapak',
            'start_year' => 2017,
            'still_here' => false,
        ]);

        if ($user->credentials()->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Bukalapak')->count() === 0) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['still_here'] != true) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['company_or_organization'] != Topic::where('name', 'bukalapak')->first()->id) $this->assertTrue(false);

        $this->assertTrue(true);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_location_credential_with_start_year_and_end_year()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addLocationCredential($user, [
            'location' => 'Jakarta',
            'start_year' => 2017,
            'end_year' => 2018,
            'still_here' => true,
        ]);

        if ($user->credentials()->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Jakarta')->count() === 0) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['still_here'] != false) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['location'] != Topic::where('name', 'jakarta')->first()->id) $this->assertTrue(false);

        $this->assertTrue(true);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_location_credential_with_no_end_year_and_still_here_is_true()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addLocationCredential($user, [
            'location' => 'Jakarta',
            'start_year' => 2017,
            'still_here' => true,
        ]);

        if ($user->credentials()->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Jakarta')->count() === 0) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['still_here'] != true) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['location'] != Topic::where('name', 'jakarta')->first()->id) $this->assertTrue(false);

        $this->assertTrue(true);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_location_credential_with_no_end_year_and_still_here_is_false()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addLocationCredential($user, [
            'location' => 'Jakarta',
            'start_year' => 2017,
            'still_here' => false,
        ]);

        if ($user->credentials()->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Jakarta')->count() === 0) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['still_here'] != true) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['location'] != Topic::where('name', 'jakarta')->first()->id) $this->assertTrue(false);

        $this->assertTrue(true);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_education_credential()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addEducationCredential($user, [
            'school' => 'USU',
            'concentration' => 'Telecommunication',
            'secondary_concentration' => 'Electronic',
            'degree_type' => 'B.E.',
            'graduation_year' => null,
        ]);

        if ($user->credentials()->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Telecommunication')->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Electronic')->count() === 0) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['school'] != Topic::where('name', 'usu')->first()->id) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['concentration'] != Topic::where('name', 'telecommunication')->first()->id) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['secondary_concentration'] != Topic::where('name', 'electronic')->first()->id) $this->assertTrue(false);

        $this->assertTrue(true);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_topic_credential()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new CredentialService;

        $credential->addTopicCredential($user, [
            'topic' => 'Business',
            'experience' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, tenetur unde inventore blanditiis fugiat nobis! Ipsa perspiciatis fuga dolor tenetur ducimus vero maxime quis perferendis, adipisci, et maiores aut at?',
        ]);

        if ($user->credentials()->count() === 0) $this->assertTrue(false);
        if (Topic::where('name', 'Business')->count() === 0) $this->assertTrue(false);
        if ($user->credentials()->first()->properties['topic'] != Topic::where('name', 'business')->first()->id) $this->assertTrue(false);

        $this->assertTrue(true);
    }
}
