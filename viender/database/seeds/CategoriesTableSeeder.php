<?php

use Illuminate\Database\Seeder;
use Viender\Topic\Models\Topic;
use Viender\Topic\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$categories = [
            [
                'name'          => 'Location',
                'description'   => null,
            ],
            [
                'name'          => 'Company or Organization',
                'description'   => null,
            ],
            [
                'name'          => 'School',
                'description'   => null,
            ],
            [
                'name'          => 'Concentration',
                'description'   => null,
            ],
            [
                'name'          => 'Secondary Concentration',
                'description'   => null,
            ],
            [
                'name'          => 'Health and Medicine',
                'description'   => null,
            ],
            [
                'name'          => 'History, Philosophy, Religion, and Humanities',
                'description'   => null,
            ],
            [
                'name'          => 'Literature, Languages, and Communication',
                'description'   => null,
            ],
            [
                'name'          => 'Science, Engineering, and Technology',
                'description'   => null,
            ],
            [
                'name'          => 'Startups',
                'description'   => null,
            ],
            [
                'name'          => 'Business, Work, and Careers',
                'description'   => null,
            ],
            [
                'name'          => 'Art, Design, and Style',
                'description'   => null,
            ],
            [
                'name'          => 'Recreation, Sports, Travel, and Activities',
                'description'   => null,
            ],
            [
                'name'          => 'Education, Schools, and Learning',
                'description'   => null,
            ],
            [
                'name'          => 'News, Entertainment, and Pop Culture',
                'description'   => null,
            ],
            [
                'name'          => 'Life, Relationships, and Self',
                'description'   => null,
            ],
            [
                'name'          => 'Politics, Law, Government, and Judiciary',
                'description'   => null,
            ],
            [
                'name'          => 'Food, Cuisines, and Cooking',
                'description'   => null,
            ],
            [
                'name'          => 'Social Media',
                'description'   => null,
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
            echo 'Creating category: ' . $category['name'] . PHP_EOL;
        }
    }
}
