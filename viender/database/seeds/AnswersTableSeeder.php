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
        $user_ids = \App\User::all()->pluck('id')->toArray();

        $faker = \Faker\Factory::create();

        foreach (Question::all() as $question) {

            $randomKeys = array_rand($user_ids, 10);

	    	foreach ($randomKeys as $key) {
			    Answer::create([
			        'user_id' => $user_ids[$key],
			        'question_id' => $question->id,
			        'slug' => User::find($user_ids[$key])->username,
			        'body' => implode("<br>", $faker->paragraphs(10)),
			    ]);
	    	}
    	}
    }
}
