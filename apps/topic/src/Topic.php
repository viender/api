<?php

namespace Viender\Topic;

use Viender\Topic\Models\Category;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Viender\Topic\Models\Topic as TopicModel;

class Topic
{

	public static function routes(array $options = [], $callback = null)
	{
        $callback = $callback ?: function ($router) {
            $router->all();
        };

        $options = array_merge($options, [
            'namespace' => '\Viender\Topic\Http\Controllers',
        ]);

        Route::group($options, function ($router) use ($callback) {
            $callback(new Urls($router));
        });
	}

    public function create($name, $description = null, $categoryId = null, $class = null)
    {
        $duplicateCount = TopicModel::where('name', $name)->count();

        $slug = $name . ($duplicateCount > 0 ? ('-' . $duplicateCount + 1) : '');

        $topic = TopicModel::create([
            'name'              => $name,
            'description'       => $description,
            'class'             => $class ?? 'user-generated',
            'slug'              => $slug,
            'thumbnail'         => 'public/images/topic-default.jpg',
            'thumbnail_medium'  => 'public/images/topic-default-medium.jpg',
            'thumbnail_large'   => 'public/images/topic-default-large.jpg',
        ]);

        if ($categoryId) {
            $category = Category::find($categoryId);
            if ($category) $topic->categories()->attach($category);
        }

        return $topic;
    }
}
