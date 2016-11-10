<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public $tables = [
        'addresses',
        'zip_codes',
        'cities',
        'states',
        'countries',
        'stars',
        'downvotes',
        'upvotes',
        'comments',
        'tag_user',
        'taggables',
        'tags',
        'bids',
        'auctions',
        'answers',
        'questions',
        'password_resets',
        'users',
    ];

    public $seeders = [
        CountriesTableSeeder::class,
        StatesTableSeeder::class,
        CitiesTableSeeder::class,
        ZipCodesTableSeeder::class,
        // AddressesTableSeeder::class,
        UsersTableSeeder::class,
        TagsTableSeeder::class,
        QuestionsTableSeeder::class,
        AnswersTableSeeder::class,
        AuctionsTableSeeder::class,
        BidsTableSeeder::class,
        CommentsTableSeeder::class,
        UpvotesTableSeeder::class,
        DownvotesTableSeeder::class,
        StarsTableSeeder::class,
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateTables($this->tables);

        $this->callSeeder($this->seeders);
    }

    public function callSeeder($seeders) 
    {
        foreach ($seeders as $seeder) {
            echo 'calling ' . $seeder . '... ';
            $this->call($seeder);
        }
    }

    public function truncateTables($tables)
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        
        foreach ($tables as $table) {
            echo 'truncating ' . $table . '...';
            DB::table($table)->truncate();
            echo ' (done)' . PHP_EOL;
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
