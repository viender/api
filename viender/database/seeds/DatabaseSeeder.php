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
        // 'viender_dealer_bids',
        // 'viender_dealer_auctions',
        'answers',
        'questions',
        'password_resets',
        'users',
        'topics',
        'role_user',
        'roles',
        'category_topic',
        'categories',
    ];

    public $seeders = [
        CategoriesTableSeeder::class,
        TopicsTableSeeder::class,
        CountriesTableSeeder::class,
        StatesTableSeeder::class,
        CitiesTableSeeder::class,
        ZipCodesTableSeeder::class,
        // AddressesTableSeeder::class,
        TagsTableSeeder::class,
        UsersTableSeeder::class,
        QuestionsTableSeeder::class,
        AnswersTableSeeder::class,
        // AuctionsTableSeeder::class,
        // BidsTableSeeder::class,
        CommentsTableSeeder::class,
        UpvotesTableSeeder::class,
        DownvotesTableSeeder::class,
        StarsTableSeeder::class,
        RolesTableSeeder::class,
    ];

    public $productionSeeders = [
        Viender\Topic\Models\Category::class => CategoriesTableSeeder::class,
        Viender\Topic\Models\Topic::class => TopicsTableSeeder::class,
        Viender\Role\Models\Role::class => RolesTableSeeder::class,
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (config('app.env') === 'production') {
            $this->callProductionSeeder();
        } else if (config('app.env') === 'local') {
            $this->truncateTables($this->tables);
            $this->callSeeder($this->seeders);
        }
    }

    public function callProductionSeeder()
    {
        foreach ($this->productionSeeders as $model => $seeder) {
            echo 'calling ' . $seeder . '... ';
            if ($model::count() === 0) {
                $this->call($seeder);
                echo 'done' . PHP_EOL;
            } else {
                echo 'nothing to seed' . PHP_EOL;
            }
        }
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
