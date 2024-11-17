<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->middleware('auth', 'verified');

Route::get('/login', function(){
    return Inertia::render('Auth/Login');
})->name('login');
