<?php

namespace Tests\Unit;

use Tests\TestCase;
use Viender\Topic\Models\Topic;
use Viender\Credential\Credential;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CredentialTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @return void
     */
    public function it_can_add_employment_credential_with_start_year_and_end_year()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new Credential;

        $credential->addEmploymentCredential($user, [
            'position' => 'Frontend Developer',
            'company_or_organization' => 'Bukalapak',
            'start_year' => 2017,
            'end_year'   => 2018,
            'still_here' => true,
        ]);

        $result = true;

        if ($user->credentials()->count() === 0) $result = false;
        if (Topic::where('name', 'Bukalapak')->count() === 0) $result = false;
        if ($user->credentials()->first()->property['still_here'] != false) $result = false;

        $this->assertTrue($result);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_employment_credential_with_no_end_year_and_still_here_is_true()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new Credential;

        $credential->addEmploymentCredential($user, [
            'position' => 'Frontend Developer',
            'company_or_organization' => 'Bukalapak',
            'start_year' => 2017,
            'still_here' => true,
        ]);

        $result = true;

        if ($user->credentials()->count() === 0) $result = false;
        if (Topic::where('name', 'Bukalapak')->count() === 0) $result = false;
        if ($user->credentials()->first()->property['still_here'] != true) $result = false;

        $this->assertTrue($result);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_employment_credential_with_no_end_year_and_still_here_is_false()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new Credential;

        $credential->addEmploymentCredential($user, [
            'position' => 'Frontend Developer',
            'company_or_organization' => 'Bukalapak',
            'start_year' => 2017,
            'still_here' => false,
        ]);

        $result = true;

        if ($user->credentials()->count() === 0) $result = false;
        if (Topic::where('name', 'Bukalapak')->count() === 0) $result = false;
        if ($user->credentials()->first()->property['still_here'] != true) $result = false;

        $this->assertTrue($result);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_location_credential_with_start_year_and_end_year()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new Credential;

        $credential->addLocationCredential($user, [
            'location' => 'Jakarta',
            'start_year' => 2017,
            'end_year' => 2018,
            'still_here' => true,
        ]);

        $result = true;

        if ($user->credentials()->count() === 0) $result = false;
        if (Topic::where('name', 'Jakarta')->count() === 0) $result = false;
        if ($user->credentials()->first()->property['still_here'] != false) $result = false;

        $this->assertTrue($result);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_location_credential_with_no_end_year_and_still_here_is_true()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new Credential;

        $credential->addLocationCredential($user, [
            'location' => 'Jakarta',
            'start_year' => 2017,
            'still_here' => true,
        ]);

        $result = true;

        if ($user->credentials()->count() === 0) $result = false;
        if (Topic::where('name', 'Jakarta')->count() === 0) $result = false;
        if ($user->credentials()->first()->property['still_here'] != true) $result = false;

        $this->assertTrue($result);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_location_credential_with_no_end_year_and_still_here_is_false()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new Credential;

        $credential->addLocationCredential($user, [
            'location' => 'Jakarta',
            'start_year' => 2017,
            'still_here' => false,
        ]);

        $result = true;

        if ($user->credentials()->count() === 0) $result = false;
        if (Topic::where('name', 'Jakarta')->count() === 0) $result = false;
        if ($user->credentials()->first()->property['still_here'] != true) $result = false;

        $this->assertTrue($result);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_education_credential()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new Credential;

        $credential->addEducationCredential($user, [
            'school' => 'USU',
            'concentration' => 'Telecommunication',
            'secondary_concentration' => 'Electronic',
            'degree_type' => 'B.E.',
            'graduation_year' => null,
        ]);

        $result = true;

        if ($user->credentials()->count() === 0) $result = false;
        if (Topic::where('name', 'Telecommunication')->count() === 0) $result = false;
        if (Topic::where('name', 'Electronic')->count() === 0) $result = false;

        $this->assertTrue($result);
    }

    /**
     * @test
     * @return void
     */
    public function it_can_add_topic_credential()
    {
        $user = factory(\App\User::class)->make();
        $user->save();
        $credential = new Credential;

        $credential->addTopicCredential($user, [
            'topic' => 'Business',
            'experience' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, tenetur unde inventore blanditiis fugiat nobis! Ipsa perspiciatis fuga dolor tenetur ducimus vero maxime quis perferendis, adipisci, et maiores aut at?',
        ]);

        $result = true;

        if ($user->credentials()->count() === 0) $result = false;
        if (Topic::where('name', 'Business')->count() === 0) $result = false;

        $this->assertTrue($result);
    }
}
