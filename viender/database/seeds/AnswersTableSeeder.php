<?php

use App\User;
use Illuminate\Database\Seeder;
use Viender\Socialite\Models\Answer;
use Viender\Socialite\Models\Question;

class AnswersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$user_ids = array_rand(User::all()->toArray(), 2);

    	$faker = \Faker\Factory::create();

    	foreach (Question::all() as $question) {
	    	foreach ($user_ids as $user_id) {
			    Answer::create([
			        'user_id' => $user_id,
			        'question_id' => $question->id,
			        'slug' => User::find($user_id)->username,
			        'body' => implode(" ", $faker->paragraphs(3)),
			    ]);
	    	}
    	}
    }
}
