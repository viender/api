<?php

use Illuminate\Database\Seeder;
use Viender\Topic\Models\Topic;

class TopicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$topics = [
			'Health and Medicine' => [
				'Health',
				'Healthy Eating',
				'Medicine and Healthcare',
				'Exercise',
				'Healthy Living',
				'Nutrition',
				'Mental Health',
			],
			'History, Philosophy, Religion, and Humanities' => [
				'History',
				'World History',
				'History of the United States of America',
				'Military History and Wars',
				'World War II',
				'Philosophy',
				'Religion',
				'Philosophy of Science',
			],
			'Literature, Languages, and Communication' => [
				'Books',
				'Writing',
				'Literature',
				'Book Recommendations',
				'Novels',
				'Reading',
				'Fiction',
				'Literary Fiction',
			],
			'Science, Engineering, and Technology' => [
				'Technology',
				'Science',
				'Computer Science',
				'Physics',
				'Psychology',
				'Economics',
				'Mathematics',
				'Technology Trends',
				'Computer Programming',
				'Software Engineering',
				'Machine Learning',
				'Social Psychology',
				'The Universe',
				'Algorithms',
				'Neuroscience',
				'Programming Languages',
				'Statistics (academic discipline)',
				'Probability (statistics)',
			],
			'Startups' => [
				'Startups',
				'Lean Startups',
				'Startup Founders and Entrepreneurs',
				'Startup Advice and Strategy',
				'Venture Capital',
			],
			'Business, Work, and Careers' => [
				'Business',
				'Entrepreneurship',
				'Finance',
				'Business Strategy',
				'Marketing',
				'Investing',
				'Business Models',
				'Stock Markets',
				'Career Advice',
				'Personal Finance',
				'Money',
			],
			'Art, Design, and Style' => [
				'Design',
				'Photography',
				'Fashion and Style',
				'Fine Art',
				'Web Design',
				'User Interfaces',
				'Digital Photography',
				'Product Design of Physical Goods',
				'Clothing and Apparel',
			],
			'Recreation, Sports, Travel, and Activities' => [
				'Visiting and Travel',
				'International Travel',
				'Vacations',
				'Tourism',
				'Travel Hacks',
				'Sports',
				'Football (Soccer)',
				'Cricket (sport)',
			],
			'Education, Schools, and Learning' => [
				'Education',
				'Scientific Research',
				'Higher Education',
				'Learning',
				'TED',
				'Graduate School Education',
				'The College and University Experience',
			],
			'News, Entertainment, and Pop Culture' => [
				'Journalism',
				'Entertainment',
				'Hollywood',
				'Movies',
				'Music',
				'Rock Music',
				'Musicians',
				'Television',
				'Television Series',
				'Game of Thrones (TV series)',
				'How I Met Your Mother (TV series)',
			],
			'Life, Relationships, and Self' => [
				'Dating and Relationships',
				'Life and Living',
				'Love',
				'Humor',
				'Self-Improvement',
				'Social Advice',
				'Tips and Hacks for Everyday Life',
				'Interpersonal Interaction',
				'Life Lessons',
				'Friendship',
				'Comedy',
				'Life Advice',
				'Marriage',
				'Dating Advice',
			],
			'Politics, Law, Government, and Judiciary' => [
				'Politics',
				'Government',
				'International Relations',
			],
			'Food, Cuisines, and Cooking' => [
				'Food',
				'Cooking',
				'Recipes',
				'Restaurants',
			],
			'Social Media' => [
				'YouTube',
				'Google (company)',
				'Facebook (product)',
				'Quora',
				'Viender',
			],
		];


		foreach ($topics as $topic => $subtopics) {
			$slug = str_replace(' ', '-', $topic);

		    $slug = preg_replace('/[^A-Za-z0-9\-]/', '', $slug);

			$parent = Topic::create([
		        'slug'				=> $slug,
		        'name'				=> $topic,
		        'class'				=> 'root',
		        'thumbnail'			=> '/img/topic-default.jpg',
		        'thumbnail_medium'	=> '/img/topic-default-medium.jpg',
		        'thumbnail_large'	=> '/img/topic-default-large.jpg',
			]);

			foreach ($subtopics as $subtopic) {
				$slug = str_replace(' ', '-', $subtopic);

		    	$slug = preg_replace('/[^A-Za-z0-9\-]/', '', $slug);

		    	$count = Topic::where('slug', $slug)->count();

		    	if ($count > 0) {
		    		$slug = $slug . '-' . ++$count;
		    	}
		    	
				Topic::create([
					'parent_id'			=> $parent->id,
			        'slug'				=> $slug,
			        'name'				=> $subtopic,
		        	'class'				=> 'featured',
			        'thumbnail'			=> '/img/topic-default.jpg',
			        'thumbnail_medium'	=> '/img/topic-default-medium.jpg',
			        'thumbnail_large'	=> '/img/topic-default-large.jpg',
				]);
			}
		}
    }
}
