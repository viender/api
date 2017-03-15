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
        $faker = \Faker\Factory::create();

        foreach (Question::all() as $question) {
    	    $user_ids = array_rand(User::all()->toArray(), 2);

	    	foreach ($user_ids as $user_id) {
			    Answer::create([
			        'user_id' => $user_id+1,
			        'question_id' => $question->id,
			        'slug' => User::find($user_id+1)->username,
			        'body' => implode("<br>", $faker->paragraphs(10)),
			    ]);
	    	}
    	}
    }
}
