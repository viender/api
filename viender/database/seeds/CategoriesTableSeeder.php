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
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
            echo 'Creating category: ' . $category['name'] . PHP_EOL;
        }
    }
}
