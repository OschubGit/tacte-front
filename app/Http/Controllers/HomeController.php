<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function test()
    {
        return "patata";
    }

    public function profile()
    {
        return view('profile');
    }
}
