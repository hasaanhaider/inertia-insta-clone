<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->middleware('auth', 'verified');

Route::controller(App\Http\Controllers\AuthController::class)->group(function () {
    Route::get('login', 'login')->name('login');
    Route::get('/register', 'register')->name('register');
    Route::post('/register-user', 'register_store')->name('register-user');
});
