<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home() 
    {
        return view('welcome');
    }

    public function jobs() 
    {
        return view('jobs');
    }
}
